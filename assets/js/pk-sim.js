/* pk-sim.js — run one record's model for a dosing regimen the reader asked for (the Query chat's
 * "simulate" answers). Same FMI 2.0 call sequence as scripts/docs/check-wasm-fmu.mjs and
 * dbs-fmusim: instantiate → setupExperiment → setReal/setInteger → enter/exit init → doStep loop
 * → getReal → free, the step from pickStep() so every dose edge lies on the grid.
 *
 *   pkSim.withRegimen(params, meta, {dose_mg, interval_h, duration_h}) → params for that regimen
 *   pkSim.run(M, meta, params) → {t: [s], series: {observable: [kg/m3]}, final, peak, trough, step, n}
 *   pkSim.load(meta, wasmUrl) → Promise<M>      (browser: the Emscripten factory via a script tag)
 *
 * Works under Node too (test/test_query_sim.py): pass the factory's module in place of load().
 */
(function (root) {
  'use strict';
  var INT_NAMES = { adminCount: 1 };
  var MAX_POINTS = 1500;            // the curve is thinned for drawing; final/peak/trough are exact

  function paramDefault(meta, name, fallback) {
    var p = meta && meta.parameters;
    if (p && !Array.isArray(p) && name in p) return p[name];
    return fallback;
  }
  // adminDuration/n (n = 50, 100, …) dividing the first dose time and the period; capped at 30 s.
  function pickStep(p, meta) {
    var dur = p.adminDuration != null ? p.adminDuration : 600;
    var first = (p.adminTime != null ? p.adminTime : paramDefault(meta, 'adminTime', 60)) +
                ('Tlag' in p ? p.Tlag : paramDefault(meta, 'Tlag', 0));
    var period = p.adminPeriod != null ? p.adminPeriod : paramDefault(meta, 'adminPeriod', 0);
    var count = p.adminCount != null ? p.adminCount : 1;
    var onGrid = function (x, h) { return Math.abs(x / h - Math.round(x / h)) < 1e-6; };
    for (var n = 50; n <= 5000; n += 50) {
      var h = dur / n;
      if (h < 0.02) break;
      if (onGrid(first, h) && (count === 1 || !period || onGrid(period, h))) return Math.min(30, h);
    }
    return Math.min(30, Math.max(0.02, dur / 50));
  }

  // The communication grid. The templates hold every dose AFTER the first one communication step
  // too long (OpenModelica's periodic pulse ends at the step after its edge): at the 12 s step
  // pickStep gives a 600 s pulse, 7 daily doses of 120 mg delivered 854.4 mg, not 840 — +2 % per
  // repeated dose, +10 % at a 60 s step. The error is the step at the pulse's end, so each pulse
  // (and a little after it) is walked in adminDuration/1000 steps, the time between doses in
  // steps of at most 30 s that land exactly on the next pulse's start (0.1 % per dose).
  function grid(p, meta, stop) {
    var dur = p.adminDuration != null ? p.adminDuration : paramDefault(meta, 'adminDuration', 600);
    var first = (p.adminTime != null ? p.adminTime : paramDefault(meta, 'adminTime', 60)) +
                ('Tlag' in p ? p.Tlag : paramDefault(meta, 'Tlag', 0));
    var period = p.adminPeriod != null ? p.adminPeriod : paramDefault(meta, 'adminPeriod', 0);
    var count = p.adminCount != null ? Math.round(p.adminCount) : 1;
    var fine = dur / 1000, coarse = Math.min(30, dur), pts = [0];
    var fill = function (a, b, h) {
      if (b <= a) return;
      var n = Math.max(1, Math.ceil((b - a) / h - 1e-9));
      for (var j = 1; j <= n; j++) pts.push(j === n ? b : a + (b - a) * j / n);
    };
    var t = 0;
    for (var k = 0; k < (period ? count : 1); k++) {
      var s0 = first + k * period, s1 = Math.min(stop, s0 + dur * 1.05);
      if (s0 >= stop) break;
      if (s0 < t) continue;
      fill(t, s0, coarse); fill(s0, s1, fine); t = s1;
    }
    fill(t, stop, coarse);
    return pts;
  }

  // The record's parameters with the reader's regimen: the dose (kg), the period (s), as many
  // doses as start before the end, and the end itself. Everything the paper fitted stays.
  function withRegimen(params, meta, reg) {
    var out = JSON.parse(JSON.stringify(params));
    var p = out.parameters;
    var stop = reg.duration_h ? reg.duration_h * 3600 : (out.stop_time || 86400);
    var first = p.adminTime != null ? p.adminTime : paramDefault(meta, 'adminTime', 60);
    if (reg.dose_mg) p.adminMass = reg.dose_mg * 1e-6;
    if (reg.interval_h) {
      p.adminPeriod = reg.interval_h * 3600;
      p.adminCount = Math.max(1, Math.ceil((stop - first) / p.adminPeriod));
    } else if (reg.single) {
      p.adminCount = 1;
    }
    out.stop_time = stop;
    delete out.reference_peaks;           // the paper's peak belongs to the paper's regimen
    delete out.reference_peak_times;
    out.regimen = reg;
    return out;
  }

  function run(M, meta, params, opts) {
    var cw = function (n, r, a) { return M.cwrap(n, r, a); };
    var fmi = {
      createCb: cw('createFmi2CallbackFunctions', 'number', ['number']),
      instantiate: cw('fmi2Instantiate', 'number', ['string', 'number', 'string', 'string', 'number', 'number', 'number']),
      setup: cw('fmi2SetupExperiment', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
      enterInit: cw('fmi2EnterInitializationMode', 'number', ['number']),
      exitInit: cw('fmi2ExitInitializationMode', 'number', ['number']),
      setReal: cw('fmi2SetReal', 'number', ['number', 'number', 'number', 'number']),
      setInteger: cw('fmi2SetInteger', 'number', ['number', 'number', 'number', 'number']),
      getReal: cw('fmi2GetReal', 'number', ['number', 'number', 'number', 'number']),
      doStep: cw('fmi2DoStep', 'number', ['number', 'number', 'number', 'number']),
      free: cw('fmi2FreeInstance', 'number', ['number'])
    };
    if (!M.__pkSimCb) {
      var logger = M.addFunction(function () {}, 'viiiiii');
      M.__pkSimCb = fmi.createCb(logger);
    }
    var stop = params.stop_time || 86400;
    var step = (opts && opts.step) || pickStep(params.parameters, meta);
    var inst = fmi.instantiate(meta.model_identifier, 1, meta.guid, 'file:///', M.__pkSimCb, 0, 0);
    if (!inst) throw new Error('fmi2Instantiate failed');
    var ptrs = [];
    var alloc = function (arr, Type) {
      var ptr = M._malloc(arr.length * Type.BYTES_PER_ELEMENT);
      new Type(M.HEAPU8.buffer, ptr, arr.length).set(arr);
      ptrs.push(ptr);
      return ptr;
    };
    try {
      fmi.setup(inst, 1, meta.tolerance, 0, 1, stop);
      var entries = Object.keys(params.parameters).filter(function (k) { return k in meta.vr; });
      var reals = entries.filter(function (k) { return !INT_NAMES[k]; });
      var ints = entries.filter(function (k) { return INT_NAMES[k]; });
      if (reals.length && fmi.setReal(inst, alloc(reals.map(function (k) { return meta.vr[k]; }), Uint32Array), reals.length,
                                      alloc(reals.map(function (k) { return params.parameters[k]; }), Float64Array)) !== 0)
        throw new Error('fmi2SetReal failed');
      if (ints.length && fmi.setInteger(inst, alloc(ints.map(function (k) { return meta.vr[k]; }), Uint32Array), ints.length,
                                        alloc(ints.map(function (k) { return Math.round(params.parameters[k]); }), Int32Array)) !== 0)
        throw new Error('fmi2SetInteger failed');
      fmi.enterInit(inst); fmi.exitInit(inst);
      var outs = (params.observables || []).filter(function (o) { return o in meta.vr; });
      if (!outs.length) throw new Error('no observable of this record is in the template');
      var q = alloc(outs.map(function (o) { return meta.vr[o]; }), Uint32Array);
      var vp = M._malloc(outs.length * 8); ptrs.push(vp);
      // opts.step: the uniform n*step grid of check-wasm-fmu.mjs and dbs-fmusim (for comparisons)
      var pts = opts && opts.step ? null : grid(params.parameters, meta, stop);
      var total = pts ? pts.length - 1 : Math.ceil(stop / step), every = Math.max(1, Math.floor(total / MAX_POINTS));
      var res = { t: [0], series: {}, peak: {}, trough: {}, final: {}, step: pts ? null : step, n: 0, stop: stop };
      outs.forEach(function (o) { res.series[o] = [0]; res.peak[o] = 0; });
      // trough: the lowest value in the last dosing interval (the one before the end)
      var period = params.parameters.adminPeriod, lastFrom = period ? stop - period : 0;
      var t = 0, n = 0;
      while (pts ? n < total : t < stop) {
        var t0 = pts ? pts[n] : t, h = pts ? pts[n + 1] - pts[n] : Math.min(step, stop - t);
        if (fmi.doStep(inst, t0, h, 1) !== 0) throw new Error('fmi2DoStep failed at t=' + t0);
        // grid points, or n*step as FMPy: summed steps drift past dose edges
        n++; t = pts ? pts[n] : Math.min(n * step, stop);
        fmi.getReal(inst, q, outs.length, vp);
        var v = new Float64Array(M.HEAPU8.buffer, vp, outs.length);
        for (var i = 0; i < outs.length; i++) {
          var o = outs[i], x = v[i];
          if (x > res.peak[o]) res.peak[o] = x;
          if (t >= lastFrom && (res.trough[o] === undefined || x < res.trough[o])) res.trough[o] = x;
          res.final[o] = x;
        }
        if (n % every === 0 || t >= stop) {
          res.t.push(t);
          for (var j = 0; j < outs.length; j++) res.series[outs[j]].push(v[j]);
        }
      }
      res.n = n;
      return res;
    } finally {
      fmi.free(inst);
      ptrs.forEach(function (ptr) { M._free(ptr); });
    }
  }

  // Browser: the template's Emscripten build registers its factory as window[model_identifier].
  var loading = {};
  function load(meta, url) {
    var name = meta.model_identifier;
    if (root[name]) return Promise.resolve(root[name]());
    if (!loading[name]) loading[name] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = url;
      s.onload = function () { root[name] ? resolve(root[name]()) : reject(new Error(name + ' did not register')); };
      s.onerror = function () { delete loading[name]; reject(new Error('could not load ' + url)); };
      document.head.appendChild(s);
    });
    return loading[name];
  }

  var api = { pickStep: pickStep, grid: grid, withRegimen: withRegimen, run: run, load: load };
  root.pkSim = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
