// ── the home page's demo tiles ─────────────────────────────────────────────
// README's "Demo" section: two tiles the generator's template stamps with data-* URLs
// (the curated clopidogrel record). Both boot when they enter the viewport, which on a desktop screen
// is on arrival, so what they fetch has to stay small.
//
//   ① simulator (2/3): runs the record's own model with pk-sim.js — the same engine the
//      Query page's "simulate" answers use — drawing ONLY the active metabolite (C_M1),
//      with two curves: the DEFAULT run (the paper's parameters, reference phenotype)
//      and the reader's run, plus the numeric difference. Controls: dose + CYP2C19
//      phenotype, nothing else. The reader's run starts as a poor metabolizer, so the
//      difference shows on arrival.
//   ② anatomogram (1/3): pk-sites.js's body view for this drug, drawn from the small
//      data/demo-sites.json (scripts/build-demo-sites.cjs). Only when that file is missing or
//      was built from another database does the tile load sql.js and the ADME database.
//
// dbs-fmusim (the record-page component) always draws every observable curve with
// view-model internals out of reach, so the compact tile drives pk-sim directly and
// keeps the component untouched for the pages it belongs to.
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook, vm) {
  var ctx = null;                                 // the simulator tile's loaded model
  var script = function (src) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    return new Promise(function (ok, no) {
      s.onload = ok;
      s.onerror = function () { no(new Error('could not load ' + src)); };
      document.head.appendChild(s);
    });
  };

  hook.doneEach(function () {
    var path = (vm && vm.route && vm.route.path) || '';
    if (path !== '/') return;                       // the demo lives on the front page
    var wrap = document.querySelector('.pk-demo');
    if (!wrap || wrap.dataset.ready) return;
    wrap.dataset.ready = '1';

    var sim = wrap.querySelector('.pk-demo-sim');
    var anat = wrap.querySelector('.pk-demo-anat');
    if (!sim || !anat) return;
    placeholders();

    // ── placeholders ─────────────────────────────────────────────────────
    // Both tiles can take a few seconds (the model's WebAssembly above all), so each opens with a faded screenshot of its own finished view (assets/img/demo-*-
    // preview.webp, 60 kB together; retake them when the tile's look changes) and a
    // "loading" note. The real view replaces it whole (build() and runAnat() clear the
    // tile); an error replaces it too. width/height keep the tile's height from jumping.
    function placeholders() {
      var ph = function (src, w, h, what) {
        return '<div class="pk-demo-ph" role="status">' +
          '<img src="' + src + '" width="' + w + '" height="' + h + '" alt="" decoding="async">' +
          '<span class="pk-demo-ph-msg">Loading the ' + what + '…</span></div>';
      };
      sim.innerHTML = ph('assets/img/demo-sim-preview.webp', 694, 404, 'simulation');
      anat.innerHTML = ph('assets/img/demo-anat-preview.webp', 333, 388, 'anatomogram');
    }

    // ── anatomogram tile ─────────────────────────────────────────────────
    // the prebuilt drawing data, if it is this drug's and from the published database; else null
    function prebuiltSites() {
      var json = function (url) {
        return fetch(url).then(function (r) { if (!r.ok) throw new Error(url); return r.json(); });
      };
      return Promise.all([json('data/adme-latest.json'), json('data/demo-sites.json')])
        .then(function (res) {
          var ok = res[1].adme === res[0].file && res[1].drug === anat.dataset.drug;
          return ok ? res[1].model : null;
        })
        .catch(function () { return null; });
    }
    function computedSites() {
      return pkdb.loadAdme(function () {}).then(function (db) {
        // resolve() turns slugs into adme_drug rows — compute()'s drugs must be rows
        return pkSites.compute(db, pkSites.resolve(db, [anat.dataset.drug]), { text: false });
      });
    }

    function runAnat() {
      // pk-sites.js is normally pulled by the /sites route; the tile loads it itself
      script('assets/js/pk-sites.js').then(prebuiltSites).then(function (M) {
        return M || computedSites();
      }).then(function (M) {
        var root = document.createElement('div');
        // render() fills whatever containers exist; with only the anatomogram present the
        // heatmap, DDI box, PGx panel and table stay out
        root.innerHTML = '<div class="pks-anatomogram"></div>';
        pkSites.render(root, M, { ddi: false, pgx: false, table: false });
        var body = root.querySelector('.pks-anatomogram');
        if (!body) throw new Error('no site evidence for this drug');
        anat.innerHTML = '';
        anat.appendChild(body);
        var src = document.createElement('p');
        src.className = 'pk-demo-src';
        var open = document.createElement('a');
        open.href = '#/sites?drugs=' + encodeURIComponent(anat.dataset.drug);
        open.textContent = 'Open in Sites';
        src.appendChild(open);
        anat.appendChild(src);
      }).catch(function (e) {
        anat.innerHTML = '<p class="pkq-status err">' + String(e.message || e) + '</p>';
      });
    }

    // ── simulator tile ───────────────────────────────────────────────────
    function runSim() {
      var base = sim.dataset.paramsurl;
      Promise.all([
        fetch(base).then(function (r) { if (!r.ok) throw new Error(base + ': ' + r.status); return r.json(); }),
        fetch(base.replace('_params.json', '_sim_controls.json')).then(function (r) { return r.json(); }),
        fetch(sim.dataset.metaurl).then(function (r) { return r.json(); }),
        script('assets/js/pk-sim.js')
      ]).then(function (all) {
        ctx = { params: all[0], controls: all[1], meta: all[2] };
        return pkSim.load(ctx.meta, sim.dataset.wasmurl);
      }).then(function (M) {
        ctx.M = M;
        build(ctx);
      }).catch(function (e) {
        sim.innerHTML = '<p class="pkq-status err">' + String(e.message || e) + '</p>';
      });
    }

    function build(ctx) {
      var params = ctx.params, pg = params.pgx || {}, P = params.parameters;
      var DAYS = 5, STOP_H = DAYS * 24;    // every run: 5 days of daily dosing
      var KEY = anat.dataset.observable || 'C_M1';
      var label = params.observable_labels[KEY];
      var doseDef = ctx.controls.filter(function (c) { return c.key === 'adminMass'; })[0] ||
                    { label: 'Dose', unit: 'mg', scale: 1e6, min: 0.1, max: 4, step: 0.05, mult: true };
      // the curated model's own dose is the paper's 300 mg loading dose; the tile doses daily, so
      // its template names the paper's daily dose (data-dosemg). The model is linear in dose.
      var mgDefault = +sim.dataset.dosemg || Math.round(P.adminMass * doseDef.scale);  // kg → mg
      var mgOf = function (mult) { return mult * mgDefault; };

      sim.innerHTML = '';
      var bar = document.createElement('div');
      bar.className = 'pk-demo-bar';
      var dose = document.createElement('input');
      dose.type = 'range';
      dose.min = doseDef.min; dose.max = doseDef.max; dose.step = doseDef.step;
      dose.value = 1;                                               // the extract, unchanged
      dose.setAttribute('aria-label', doseDef.label + ' as a multiple of the paper dose');
      var doseOut = document.createElement('output');
      doseOut.textContent = mgOf(1) + ' mg';
      bar.appendChild(dose); bar.appendChild(doseOut);
      var gen = document.createElement('select');
      gen.setAttribute('aria-label', 'CYP2C19 phenotype');
      // the reader's run STARTS at a non-reference phenotype, so the tile shows the gene's
      // effect before anyone touches it: data-phenotype on the tile, else 'Poor', else the
      // first phenotype that is not the reference (the default curve stays the reference)
      var order = pg.order || ['Normal'];
      var notRef = order.filter(function (ph) { return ph !== pg.reference; });
      var start = [sim.dataset.phenotype, 'Poor'].filter(function (ph) {
        return ph && notRef.indexOf(ph) >= 0;
      })[0] || notRef[0] || pg.reference || order[0];
      order.forEach(function (ph) {
        var o = document.createElement('option');
        o.value = ph; o.textContent = (pg.labels || {})[ph] || ph;
        if (ph === start) o.selected = true;
        gen.appendChild(o);
      });
      bar.appendChild(gen);
      sim.appendChild(bar);
      var plot = document.createElement('div');
      plot.className = 'pk-demo-plot';
      plot.setAttribute('role', 'img');
      plot.setAttribute('aria-label', label + ': the default run vs this run');
      sim.appendChild(plot);
      var delta = document.createElement('p');
      delta.className = 'pk-demo-delta';
      sim.appendChild(delta);
      // whose model this is: the paper and the record behind the curves (template data-*)
      var src = document.createElement('p');
      src.className = 'pk-demo-src';
      var link = function (href, text) {
        var a = document.createElement('a');
        a.href = href; a.textContent = text;
        return a;
      };
      var paper = link(sim.dataset.sourceurl, sim.dataset.source);
      paper.target = '_blank'; paper.rel = 'noopener';
      src.appendChild(document.createTextNode('Model: '));
      src.appendChild(paper);
      src.appendChild(document.createTextNode(' · '));
      src.appendChild(link(sim.dataset.record, 'open record'));
      sim.appendChild(src);

      // the phenotype's overrides are straight parameter swaps, exactly like the record
      // page's component applies them
      // the runs: the DEFAULT is the paper's dose every day for 5 days; the reader's run
      // is the same regimen with its dose multiplied and its phenotype swapped
      function paramsNow(mg, ph) {
        var p = JSON.parse(JSON.stringify(params));
        p.parameters = Object.assign({}, P, (pg.phenotypes || {})[ph] || {});
        return pkSim.withRegimen(p, ctx.meta, { dose_mg: mg, interval_h: 24, duration_h: STOP_H });
      }

      var u = function (v) { return v * 1e3; };        // model kg/m³ → mg/L
      var peak = function (y) { return Math.max.apply(null, y); };
      var auc = function (t, y) {
        var s = 0;
        for (var i = 1; i < t.length; i++) s += (t[i] - t[i - 1]) * (y[i] + y[i - 1]) / 2;
        return s;
      };
      var pct = function (cur, def) {
        var v = Math.round((cur / def - 1) * 100);
        return v === 0 ? '±0' : (v > 0 ? '+' : '') + v + '%';
      };
      var KEY = anat.dataset.observable || 'C_M1';
      var label = params.observable_labels[KEY];
      var fmt = function (v) {                          // decade labels: 0.1, 0.01, 1e-4 …
        if (v >= 0.01) return +v.toPrecision(2).toString();
        return v.toExponential(0);
      };

      // the plot: log y (a daily regimen runs over decades of trough), daily x ticks; the
      // legend sits top-right, small; the default curve is a dashed grey, a little bolder,
      // drawn underneath — where the runs coincide its edge still shows around this run's
      // slimmer solid blue
      function draw(def, cur) {
        var W = 560, H = 262, L = 58, R = 14, T = 16, B = 40;   // H: the tile ~10 % lower than at 300
        var td = def.t.map(function (x) { return x / 3600; });
        var tc = cur.t.map(function (x) { return x / 3600; });
        var yD = def.series[KEY].map(u), yC = cur.series[KEY].map(u);
        var xmax = STOP_H;
        var pos = yD.concat(yC).filter(function (v) { return v > 0; });
        var ymax = Math.max.apply(null, pos) * 1.5 || 1;
        var ymin = ymax / 1e4;                          // four decades of log
        var lmin = Math.log10(ymin), lmax = Math.log10(ymax);
        var sx = function (h) { return L + (W - L - R) * h / xmax; };
        var sy = function (y) {                          // clamped: t=0 has no concentration
          var l = Math.log10(y > ymin ? y : ymin);
          return H - B - (H - T - B) * (l - lmin) / (lmax - lmin);
        };
        var NS = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
        svg.setAttribute('class', 'pk-demo-svg');
        function el2(tag, at, txt) {
          var e = document.createElementNS(NS, tag);
          Object.keys(at).forEach(function (k) { e.setAttribute(k, at[k]); });
          if (txt != null) e.textContent = txt;
          svg.appendChild(e); return e;
        }
        var i;
        for (var d = Math.ceil(lmin); d <= Math.floor(lmax); d++) {
          var y = sy(Math.pow(10, d));
          el2('line', { x1: L, x2: W - R, y1: y, y2: y, stroke: '#e2e8f0' });
          el2('text', { x: L - 8, y: y + 4, 'text-anchor': 'end', 'font-size': 10.5,
                        fill: '#64748b' }, fmt(Math.pow(10, d)));
        }
        for (i = 0; i <= DAYS; i++) {
          el2('text', { x: (L + (W - L - R) * i / DAYS).toFixed(1), y: H - B + 15,
                        'text-anchor': (i ? 'middle' : 'start'), 'font-size': 10.5,
                        fill: '#64748b' }, i ? 'day ' + (i + 1) : '0 h');
        }
        el2('text', { x: (L + W - R) / 2, y: H - 6, 'text-anchor': 'middle', 'font-size': 12,
                      fill: '#475569' }, 'time — 5 days of daily dosing');
        el2('text', { x: 10, y: (T + H - B) / 2, 'font-size': 11, fill: '#475569',
                      transform: 'rotate(-90 10 ' + (T + H - B) / 2 + ')' },
             label + ' (mg/L, log)');
        function line(t, y, color, width, dash) {
          var d = t.map(function (h, j) {
            return (j ? 'L' : 'M') + sx(h).toFixed(1) + ' ' + sy(y[j]).toFixed(2);
          }).join(' ');
          el2('path', { d: d, fill: 'none', stroke: color, 'stroke-width': width,
                        'stroke-dasharray': dash || '' });
        }
        line(td, yD, '#94a3b8', 2.8, '6 4');                // THE DEFAULT: dashed grey, bolder
        line(tc, yC, '#0074d9', 1.4);
        // the legend, right-aligned and small
        var lx = W - R, ly = T + 6;
        el2('text', { x: lx - 10, y: ly, 'text-anchor': 'end', 'font-size': 10.5,
                      fill: '#475569' }, 'the default — ' + mgDefault + ' mg a day, Normal');
        el2('circle', { cx: lx - 4, cy: ly - 3.5, r: 3.5, fill: '#94a3b8' });
        el2('text', { x: lx - 10, y: ly + 15, 'text-anchor': 'end', 'font-size': 10.5,
                      fill: '#475569' }, 'this run — ' + (pg.labels || {})[gen.value] +
             ', dose ×' + (+dose.value).toFixed(2));
        el2('circle', { cx: lx - 4, cy: ly + 11.5, r: 3.5, fill: '#0074d9' });
        plot.innerHTML = '';
        plot.appendChild(svg);
      }

      function redraw() {
        var mult = +dose.value, mg = mgOf(mult), ph = gen.value;
        doseOut.textContent = Math.round(mg) + ' mg/day';
        // steps 10x wider than the exact grid: each run takes about 80 ms, not 650, so the
        // slider keeps up. Peak, AUC and trough read at most 1 % high; both curves share that,
        // so the tile's difference stays (Poor vs Normal: -72 % at either step).
        var fast = { widen: 10 };
        var def = pkSim.run(ctx.M, ctx.meta, paramsNow(mgDefault, pg.reference || 'Normal'), fast);
        var cur = pkSim.run(ctx.M, ctx.meta, paramsNow(mg, ph), fast);
        draw(def, cur);
        var tD = def.t.map(function (x) { return x / 3600; });
        var tC = cur.t.map(function (x) { return x / 3600; });
        var dC = pct(peak(cur.series[KEY]), peak(def.series[KEY]));
        var dA = pct(auc(tC, cur.series[KEY].map(u)), auc(tD, def.series[KEY].map(u)));
        delta.textContent = 'this run vs the default: Cmax ' + dC + ' · AUC ' + dA;
      }

      dose.addEventListener('input', redraw);
      gen.addEventListener('change', redraw);
      redraw();                                     // reference vs the start phenotype
    }

    // boot when the tiles actually enter the viewport, not near it: a phone that never
    // scrolls down to them does not pay for the model
    var booted = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || booted) return;
        booted = true;
        io.disconnect();
        runAnat(); runSim();
      });
    }, { threshold: 0.1 });
    io.observe(wrap);
  });
});