// ── query page: ask the data ───────────────────────────────────────────────
// sql.js (688 kB incl. wasm) and the ~8 MB database load ONLY on /query, and only once
// per session. The page is a chat: each question becomes a turn — the question, the
// answer (the deterministic one-line summary, or with a model enabled a prose answer
// whose numbers are checked against the rows), the rows themselves, and the SQL that
// produced them, editable and re-runnable. assets/js/pk-ask.js reads the question;
// assets/js/pk-ask-llm.js is the optional in-browser model (IMPROVEMENTS_CHAT.md 1–2).
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var DB = null, loading = false, LEX = null, ENGINE = null, BUSY = false;
  var TURNS = [];                 // turn elements, re-attached when docsify re-renders the page
  var EXAMPLES = ['clearance of metformin', 'What is the difference between CL and CL/F?', 'CYP2C19 and clopidogrel',
                  'PD models of warfarin', 'clearance of midazolam in children', 'papers on semaglutide after 2023',
                  'concentration of tolvaptan 120 mg daily after 1 week'];
  var HIST = [];                  // {q, a} of earlier turns, for follow-up questions in words
  var GLOSS = null;               // the glossary's load, once

  function el(id) {
    var live = document.querySelectorAll('.markdown-section [id="' + id + '"]');
    if (live.length) return live[live.length - 1];
    var all = document.querySelectorAll('[id="' + id + '"]');
    return all.length ? all[all.length - 1] : null;
  }
  function status(msg, isErr) {
    var s = el('pkq-status'); if (!s) return;
    s.textContent = msg; s.className = 'pkq-status' + (isErr ? ' err' : ''); s.hidden = false;
  }
  function node(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function callStats(engine, from) {
    if (!engine || !engine.calls) return '';
    var call = engine.calls.slice(from || 0).filter(function (c) { return c.kind === 'text'; }).pop();
    if (!call) return '';
    var parts = [];
    if (Number.isFinite(call.prompt_tokens)) parts.push('prompt ' + call.prompt_tokens + ' tokens');
    if (Number.isFinite(call.tokens)) parts.push('answer ' + call.tokens + ' tokens');
    var runtime = String(call.runtime_stats || '').replace(/tokens\/sec/gi, 'tok/s').replace(/,\s*/g, ' · ');
    if (runtime && !/NaN|Infinity/.test(runtime)) parts.push(runtime);
    else if (Number.isFinite(call.tokens) && call.tokens > 0 && call.ms > 0)
      parts.push((call.tokens * 1000 / call.ms).toFixed(1) + ' tok/s');
    if (Number.isFinite(call.ms) && call.ms > 0) parts.push((call.ms / 1000).toFixed(1) + ' s');
    return parts.join(' · ');
  }

  // rows → a table; model_id links to the record page, href to a site page, doi out
  function table(res, box) {
    box.innerHTML = '';
    var r = res && res[0];
    if (!r || !r.values.length) { box.hidden = true; return 0; }
    box.hidden = false;
    var t = node('table'), tr = node('tr'), thead = node('thead'), tb = node('tbody');
    r.columns.forEach(function (c) { tr.appendChild(node('th', null, c)); });
    thead.appendChild(tr); t.appendChild(thead);
    var drugCol = r.columns.indexOf('drug');
    r.values.forEach(function (row) {
      var trr = node('tr');
      row.forEach(function (v, i) {
        var td = node('td', typeof v === 'number' ? 'num' : null), c = r.columns[i], a;
        if (v !== null && v !== '' && (c === 'model_id' || c === 'href' || c === 'doi')) {
          a = node('a', null, v);
          if (c === 'model_id') a.href = '#/drugs/drug_' + String(row[drugCol] || '').toLowerCase()
                                            .replace(/[^a-z0-9]+/g, '_') + '/' + v;
          else if (c === 'href') a.href = '#/' + v;
          else { a.href = 'https://doi.org/' + v; a.target = '_blank'; a.rel = 'noopener'; }
          td.appendChild(a);
        } else {
          td.textContent = v === null ? '' : String(v);
          if (v !== null && String(v).length > 40) td.title = String(v);
        }
        trr.appendChild(td);
      });
      tb.appendChild(trr);
    });
    t.appendChild(tb); box.appendChild(t);
    return r.values.length;
  }

  // ── scripts, loaded on first use ───────────────────────────────────────────────
  var scripts = {};
  function script(src) {
    if (scripts[src]) return scripts[src];
    scripts[src] = new Promise(function (resolve, reject) {
      var t = document.createElement('script'); t.src = src;
      t.onload = resolve;
      t.onerror = function () { delete scripts[src]; reject(new Error('could not load ' + src)); };
      document.head.appendChild(t);
    });
    return scripts[src];
  }
  function askScript() { return window.pkAsk ? Promise.resolve() : script('assets/js/pk-ask.js'); }
  function simScript() { return window.pkSim ? Promise.resolve() : script('assets/js/pk-sim.js'); }
  // "simulate" answers: one record's model, the reader's regimen (pk-sim.js). The parameters
  // are the record page's own file, the template the Simulation tab's WebAssembly build.
  function fetchJson(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ': ' + r.status); return r.json(); });
  }
  function simulateRow(row, reg) {
    var base = 'drugs/' + row.drug_slug + '/' + row.model + '/';
    return simScript().then(function () { return fetchJson(base + row.model + '_params.json'); }).then(function (params) {
      return fetchJson('assets/fmu/' + params.template + '.vr.json').then(function (meta) {
        return window.pkSim.load(meta, 'assets/fmu/' + params.template + '.js').then(function (M) {
          // a week of steps is 0.2–1.5 s of main thread per model: let the page paint between models
          return new Promise(function (ok) { setTimeout(function () { ok(M); }, 0); });
        }).then(function (M) {
          var run = window.pkSim.withRegimen(params, meta, reg), res = window.pkSim.run(M, meta, run);
          var o = run.observables.filter(function (x) { return x in res.final; })[0];
          return { observable: o, final: res.final[o], peak: res.peak[o], trough: res.trough[o],
                   stop_h: res.stop / 3600, t_h: res.t.map(function (x) { return x / 3600; }),
                   series: res.series, params: run, href: '#/drugs/' + row.drug_slug + '/' + row.model };
        });
      });
    });
  }
  // the curves: the answer's model in colour, the others grey; time in h, or days past 72 h
  function simChart(sim) {
    var NS = 'http://www.w3.org/2000/svg', W = 640, H = 260, L = 56, R = 12, T = 12, B = 34;
    var u = sim.unit === 'mg/L' ? 1e3 : 1e6, days = sim.runs[0].stop_h > 72;
    var xmax = sim.runs[0].stop_h, ymax = 0;
    sim.runs.forEach(function (r) { r.series[r.observable].forEach(function (v) { ymax = Math.max(ymax, v * u); }); });
    ymax = ymax || 1;
    var sx = function (h) { return L + (W - L - R) * h / xmax; }, sy = function (y) { return H - B - (H - T - B) * y / ymax; };
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'pkq-simchart');
    svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Simulated concentration over time');
    var el2 = function (tag, at, text) {
      var e = document.createElementNS(NS, tag);
      Object.keys(at).forEach(function (k) { e.setAttribute(k, at[k]); });
      if (text != null) e.textContent = text;
      svg.appendChild(e); return e;
    };
    for (var i = 0; i <= 4; i++) {
      var yv = ymax * i / 4;
      el2('line', { x1: L, x2: W - R, y1: sy(yv), y2: sy(yv), class: 'grid' });
      el2('text', { x: L - 6, y: sy(yv) + 4, 'text-anchor': 'end' }, +yv.toPrecision(2));
    }
    // whole days (every day up to two weeks, then weekly), or hours in steps of 1/2/3/6/12/24
    var span = days ? xmax / 24 : xmax, tick = days ? (span <= 14 ? 1 : 7)
      : [1, 2, 3, 6, 12, 24].filter(function (x) { return span / x <= 8; })[0] || 24;
    for (var xv = 0; xv <= span + 1e-9; xv += tick)
      el2('text', { x: sx(days ? xv * 24 : xv), y: H - B + 16, 'text-anchor': 'middle' }, String(+xv.toFixed(2)));
    el2('text', { x: (L + W - R) / 2, y: H - 4, 'text-anchor': 'middle' }, days ? 'time (days)' : 'time (h)');
    el2('text', { x: 12, y: (T + H - B) / 2, 'text-anchor': 'middle', transform: 'rotate(-90 12 ' + (T + H - B) / 2 + ')' }, sim.unit);
    sim.runs.slice().reverse().forEach(function (r, k) {
      var ys = r.series[r.observable];
      var d = r.t_h.map(function (t, j) { return (j ? 'L' : 'M') + sx(t).toFixed(1) + ' ' + sy(ys[j] * u).toFixed(1); }).join('');
      var first = k === sim.runs.length - 1;
      el2('path', { d: d, class: first ? 'main' : 'other' });
    });
    return svg;
  }
  function llmScript() { return window.pkAskLLM ? Promise.resolve() : script('assets/js/pk-ask-llm.js'); }
  function markdownScript() {
    if (window.DOMPurify && typeof window.DOMPurify.sanitize === 'function') return Promise.resolve();
    return script('https://cdn.jsdelivr.net/npm/dompurify@3.4.12/dist/purify.min.js').catch(function () {
      return null;                         // plain-text fallback if the sanitizer CDN is unavailable
    });
  }
  function renderMarkdown(target, source) {
    var text = String(source || '');
    if (!window.marked || typeof window.marked.parse !== 'function' ||
        !window.DOMPurify || typeof window.DOMPurify.sanitize !== 'function') {
      target.textContent = text;           // never inject unsanitized model output
      return;
    }
    try { target.innerHTML = window.DOMPurify.sanitize(window.marked.parse(text)); }
    catch (e) { target.textContent = text; }
  }
  function lexicon() { if (!LEX) LEX = window.pkAsk.lexiconFromDB(DB); return LEX; }
  // the glossary explanations are made of (assets/chat/glossary.json); a failed fetch leaves
  // explanation questions to the model's general knowledge, said so
  function glossary() {
    if (!GLOSS) GLOSS = fetch('assets/chat/glossary.json').then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (g) { window.pkAsk.withGlossary(lexicon(), g); return g; });
    return GLOSS;
  }

  // ── the conversation ──────────────────────────────────────────────────────────
  function scrollDown() { var l = el('pkq-log'); if (l) l.scrollTop = l.scrollHeight; }
  function empty() {
    var log = el('pkq-log');
    if (!log || TURNS.length) return;
    var e = node('div', 'pkq-empty');
    e.appendChild(node('p', null, 'Ask about drugs, parameters, genes and papers in the extracted literature. ' +
      'Every answer comes from the database, with its rows and the SQL that found them.'));
    var ch = node('p', 'pkq-chips');
    EXAMPLES.forEach(function (x) {
      var b = node('button', 'pkq-chip', x); b.type = 'button'; b.dataset.ask = x; ch.appendChild(b);
    });
    e.appendChild(ch);
    log.appendChild(e);
  }
  function attach() {              // after a re-render: the same turns, in the new log
    var log = el('pkq-log');
    if (!log) return;
    log.innerHTML = '';
    if (!TURNS.length) return empty();
    TURNS.forEach(function (t) { log.appendChild(t); });
    scrollDown();
  }

  function ask(question) {
    var q = String(question || '').trim();
    var log = el('pkq-log');
    if (!q || !DB || !log || BUSY) return;
    var answerEngine = ENGINE;
    var callStart = answerEngine && answerEngine.calls ? answerEngine.calls.length : 0;
    BUSY = true;
    var send = el('pkq-askbtn'); if (send) send.disabled = true;
    var thinkingControl = el('pkq-thinking'); if (thinkingControl) thinkingControl.disabled = true;
    if (!TURNS.length) log.innerHTML = '';
    var turn = node('div', 'pkq-turn'), a = node('div', 'pkq-a');
    var chips = node('div', 'pkq-chips'), text = node('div', 'pkq-text pending',
      answerEngine ? answerEngine.name + ' is reading the question…' : 'Looking it up…');
    var thinkBox = null, thinkText = null;
    if (answerEngine && THINKING) {
      thinkBox = node('div', 'pkq-thinking-box');
      thinkBox.setAttribute('aria-label', 'Model thinking');
      thinkBox.hidden = true;
      thinkBox.appendChild(node('span', 'pkq-thinking-label', 'Thinking · '));
      thinkText = node('span');
      thinkBox.appendChild(thinkText);
      a.appendChild(thinkBox);
    }
    turn.appendChild(node('div', 'pkq-q', q));
    a.appendChild(chips); a.appendChild(text); turn.appendChild(a);
    TURNS.push(turn); log.appendChild(turn); scrollDown();

    askScript().then(glossary).then(function () {
      return answerEngine ? markdownScript() : null;
    }).then(function () {
      return answerEngine ? window.pkdb.loadKnowledge(function (m) { text.textContent = m; }) : null;
    }).then(function (kdb) {
      if (answerEngine) text.textContent = answerEngine.name + ' is reading the question…';
      return window.pkAsk.answer(q, DB, lexicon(), {
        engine: answerEngine, explain: !!answerEngine, history: HIST.slice(-3), knowledge: kdb, simulate: simulateRow,
        onText: function (partial) {
          text.className = 'pkq-text streaming';
          renderMarkdown(text, partial);   // parse Markdown, then sanitize before insertion
          scrollDown();
        },
        onThinking: thinkText ? function (partial) {
          if (!partial) return;
          thinkBox.hidden = false;
          thinkText.textContent = partial; // reasoning is plain text, never parsed as HTML
          thinkBox.scrollTop = thinkBox.scrollHeight;
          scrollDown();
        } : undefined
      });
    }).then(function (ans) {
      var stats = callStats(answerEngine, callStart);
      var plan = ans.plan;
      window.pkAsk.understood(plan).forEach(function (b) { chips.appendChild(node('span', 'pkq-chip', b)); });
      plan.corrected.forEach(function (c) { chips.appendChild(node('span', 'pkq-chip warn', 'read “' + c.from + '” as ' + c.to)); });
      if (ans.modelError) chips.appendChild(node('span', 'pkq-chip warn', ans.sqlError
        ? 'model fallback: ' + ans.modelError.slice(0, 70)
        : 'model: ' + ans.modelError.slice(0, 70) + ' — keywords used'));
      if (ans.sqlError) chips.appendChild(node('span', 'pkq-chip warn',
        'Database query could not be built; using a general model answer'));
      // an ambiguous name is a choice, never a guess: each option asks again with it spelled out
      plan.suggestions.forEach(function (sg) {
        chips.appendChild(node('span', 'pkq-chip warn', '“' + sg.word + '” could be:'));
        sg.options.forEach(function (o) {
          var b = node('button', 'pkq-chip', o); b.type = 'button';
          b.dataset.ask = (' ' + plan.text + ' ').replace(' ' + sg.word + ' ', ' ' + o + ' ').trim();
          chips.appendChild(b);
        });
      });
      // the prose when a model wrote one that survived the checks, else the summary
      text.className = 'pkq-text';
      renderMarkdown(text, ans.explanation || ans.summary);
      var gl = ans.glossary || [], titles = gl.map(function (e) { return e.title; }).join(', ');
      if (ans.general && !ans.explanation && gl.length) {      // keywords: the glossary entries themselves
        text.textContent = '';
        gl.forEach(function (e) {
          var para = node('p'); para.style.margin = '0 0 6px';
          para.appendChild(node('strong', null, e.title + '. '));
          para.appendChild(document.createTextNode(e.text));
          text.appendChild(para);
        });
        a.appendChild(node('span', 'pkq-sub', 'From the site glossary (draft definitions, pending expert review)' +
          (ENGINE ? '.' : '. Choose a language model in the list below for an answer in your own words.')));
      } else if (ans.general && ans.explanation) {             // a model, in words
        var read = ans.passages && ans.passages.length;
        a.appendChild(node('span', 'pkq-sub', 'Answered by ' + answerEngine.name + (read
          ? ' from ' + ans.passages.length + ' passage(s) listed below' + (gl.length ? ' and the site glossary — ' + titles : '') + '.'
          : gl.length
          ? ' from the site glossary — ' + titles + ' (draft definitions, pending expert review).'
          : ans.sqlError
            ? ' from general knowledge because the database query could not be built; verify it independently.'
            : ' from general knowledge: no glossary entry covers this, so check it against a textbook.') +
          (ans.dropped.length ? ' ' + ans.dropped.length + ' sentence(s) giving a drug-specific number no passage holds were dropped.' : '') +
          (stats ? ' · ' + stats : '')));
      }
      HIST.push({ q: q, a: ans.explanation || ans.summary, intent: plan.intent });
      if (!ans.explanation && ans.dropped.length && !ans.general) {
        a.appendChild(node('span', 'pkq-sub', answerEngine.name + '’s prose was withheld: it used a number or a claim the rows do not hold.'));
      }
      if (ans.explanation && !ans.general) {
        a.appendChild(node('span', 'pkq-sub', 'From the database: ' + ans.summary + ' — prose by ' + answerEngine.name +
          ', its numbers checked against the rows' +
          (ans.passages && ans.passages.length ? ' and the ' + ans.passages.length + ' passage(s) below' : '') + (ans.dropped.length ? ' (' + ans.dropped.length + ' sentence(s) dropped)' : '') +
          (gl.length ? '; the why draws on the site glossary — ' + titles : '') +
          (stats ? ' · ' + stats : '') + '.'));
      }
      // a simulation: the curves, the numbers per model, the record's own simulator
      if (ans.sim && ans.sim.runs.length) {
        var fig = node('div', 'pkq-sim');
        fig.appendChild(simChart(ans.sim));
        var leg = node('div', 'pkq-sub');
        leg.appendChild(node('span', 'pkq-sim-main', '— ' + ans.sim.runs[0].row.model));
        if (ans.sim.runs.length > 1) leg.appendChild(node('span', 'pkq-sim-other', '  — ' + (ans.sim.runs.length - 1) + ' other model(s)'));
        fig.appendChild(leg);
        var tb2 = node('table'), hr = node('tr'), f = ans.sim.unit === 'mg/L' ? 1e3 : 1e6;
        ['model', 'paper', 'population', 'at end (' + ans.sim.unit + ')', 'peak', 'trough'].forEach(function (h) { hr.appendChild(node('th', null, h)); });
        tb2.appendChild(hr);
        ans.sim.runs.forEach(function (r) {
          var tr2 = node('tr'), td = node('td'), lk = node('a', null, r.row.model);
          lk.href = r.href; lk.title = 'open this record’s simulator'; td.appendChild(lk); tr2.appendChild(td);
          [r.row.paper, r.row.population || '', +(r.final * f).toPrecision(3), +(r.peak * f).toPrecision(3),
           +(r.trough * f).toPrecision(3)].forEach(function (x) { tr2.appendChild(node('td', null, String(x))); });
          tb2.appendChild(tr2);
        });
        var tw = node('div', 'pkq-table'); tw.appendChild(tb2); fig.appendChild(tw);
        fig.appendChild(node('span', 'pkq-sub', 'Each model runs with its paper’s fitted parameters and this regimen; ' +
          'a regimen outside the doses the paper studied is an extrapolation.'));
        a.appendChild(fig);
      }
      // the passages the model was shown, numbered as it cites them
      if (ans.explanation && ans.passages && ans.passages.length) {
        var src = node('details', 'pkq-sqlbox'), ol = node('ol', 'pkq-sources');
        src.appendChild(node('summary', null, 'Sources the model read (' + ans.passages.length + ')'));
        ans.passages.forEach(function (h) {
          var li = node('li'), a2 = node(h.url ? 'a' : 'span', null, h.source);
          if (h.url) { a2.href = h.url; a2.target = '_blank'; a2.rel = 'noopener'; }
          li.appendChild(a2);
          li.appendChild(document.createTextNode(' — ' + h.title + (h.license ? ' (' + h.license + ')' : '')));
          var quote = node('div', 'pkq-source-text', h.text.length > 320 ? h.text.slice(0, 320) + '…' : h.text);
          li.appendChild(quote);
          ol.appendChild(li);
        });
        src.appendChild(ol);
        a.appendChild(src);
      }
      if (ans.sql) {
        var box = node('div', 'pkq-table');
        a.appendChild(box);
        if (ans.sim && ans.sim.runs.length) box.hidden = true;   // the simulation table lists the same models
        else table(ans.res, box);
        var det = node('details', 'pkq-sqlbox'), sum = node('summary', null, 'SQL');
        var ta = node('textarea'); ta.value = ans.sql; ta.spellcheck = false;
        var row = node('div', 'pkq-row'), run = node('button', 'pkq-btn', 'Run'), meta = node('span', 'pkq-meta');
        run.type = 'button';
        run.addEventListener('click', function () {      // edit the SQL, re-run it in place
          try {
            var n = table(DB.exec(ta.value), box);
            meta.className = 'pkq-meta'; meta.textContent = n + ' row(s)';
          } catch (e) { meta.className = 'pkq-meta err'; meta.textContent = String(e.message || e); }
        });
        row.appendChild(run); row.appendChild(meta);
        det.appendChild(sum); det.appendChild(ta); det.appendChild(row);
        a.appendChild(det);
      }
      try {
        var h = '#/query?ask=' + encodeURIComponent(q);
        if (location.hash !== h) history.replaceState(null, '', h);
      } catch (e) { /* a file:// page without history is fine */ }
    }).catch(function (e) {
      text.className = 'pkq-text'; text.textContent = 'Something went wrong: ' + String(e.message || e);
    }).then(function () {
      BUSY = false;
      if (el('pkq-askbtn')) el('pkq-askbtn').disabled = false;
      thinkingControl = el('pkq-thinking');
      if (thinkingControl) thinkingControl.disabled = !CHOICE || !!(SUPPORT && !SUPPORT.ok);
      scrollDown();
    });
  }

  // ── how questions are read: one list — keywords, or a model ──────────────────────────
  // Choosing a model starts its download (once, into this browser) and enables it; choosing
  // keywords switches it off and frees the GPU. The list says which models are already
  // downloaded. A model chosen before and still cached is enabled again on the next visit.
  var LLM_KEY = 'pkq-llm-model', THINK_KEY = 'pkq-llm-thinking', CHOICE = '', SUPPORT = null, CACHED = {};
  var THINKING = false;
  function llmStatus(msg) {
    var note = el('pkq-llmnote'); if (!note) return;
    var st = note.querySelector('.pkq-llmstatus');
    if (!st) { st = node('strong', 'pkq-llmstatus'); note.insertBefore(st, note.firstChild); }
    st.textContent = msg ? msg + ' ' : '';
  }
  function remember(key) { try { localStorage.setItem(LLM_KEY, key); } catch (e) { /* a convenience only */ } }
  function modeList() {                    // (re)build the options from MODELS and the cache
    var sel = el('pkq-mode');
    if (!sel || !window.pkAskLLM) return;
    while (sel.options.length > 1) sel.remove(1);
    window.pkAskLLM.MODELS.forEach(function (m) {
      var o = node('option', null, m.label + (SUPPORT && !SUPPORT.ok ? ' (needs WebGPU)'
        : CACHED[m.key] ? ' · downloaded' : ' · ' + m.gb + ' GB download'));
      o.value = m.key;
      o.disabled = !!(SUPPORT && !SUPPORT.ok);
      o.title = m.label + ': ' + m.gb + ' GB download, about ' + m.vram + ' GB of GPU memory';
      sel.appendChild(o);
    });
    sel.value = CHOICE;
    sel.className = 'pkq-mode' + (ENGINE ? ' on' : '');
    var thinkingWrap = el('pkq-thinking-control'), thinking = el('pkq-thinking');
    if (thinkingWrap) thinkingWrap.hidden = !CHOICE;
    if (thinking) { thinking.checked = THINKING; thinking.disabled = !CHOICE || !!(SUPPORT && !SUPPORT.ok) || BUSY; }
  }
  function modeInit() {
    try { THINKING = localStorage.getItem(THINK_KEY) === '1'; } catch (e) { /* preference only */ }
    llmScript().then(function () { return window.pkAskLLM.support(); }).then(function (sup) {
      SUPPORT = sup;
      window.pkAskLLM.setThinking(THINKING);
      modeList();
      if (!sup.ok) { llmStatus('Language models are not available here: ' + sup.why + '.'); return; }
      // which models are downloaded — asks WebLLM, so only once the page is idle
      return Promise.all(window.pkAskLLM.MODELS.map(function (m) {
        return window.pkAskLLM.cached(m.key).then(function (c) { CACHED[m.key] = c; });
      })).then(function () {
        modeList();
        var last = null;
        try { last = localStorage.getItem(LLM_KEY); } catch (e) { /* storage blocked */ }
        if (last && CACHED[last] && !ENGINE && !CHOICE) choose(last);
      });
    }).catch(function (e) { llmStatus(String(e.message || e)); });
  }
  function choose(key) {
    var sel = el('pkq-mode'), prev = ENGINE;
    CHOICE = key || '';
    remember(CHOICE);
    if (sel) sel.value = CHOICE;
    if (!CHOICE) {                          // keywords: the model off, its GPU memory freed
      ENGINE = null; modeList(); llmStatus('');
      if (prev && prev.unload) prev.unload();
      return;
    }
    var m = window.pkAskLLM.MODELS.filter(function (x) { return x.key === CHOICE; })[0];
    var token = CHOICE;
    ENGINE = null; modeList();
    if (prev && prev.unload) prev.unload();
    llmStatus((CACHED[CHOICE] ? 'Loading ' : 'Downloading ') + m.label + '… questions are read by keywords until it is ready.');
    window.pkAskLLM.load(CHOICE, function (text, frac) {
      if (CHOICE !== token) return;
      var pct = typeof frac === 'number' && frac > 0 ? ' ' + Math.round(frac * 100) + ' %' : '';
      llmStatus((CACHED[token] ? 'Loading ' : 'Downloading ') + m.label + '…' + pct);
    }).then(function (eng) {
      if (CHOICE !== token) { eng.unload(); return; }       // the reader chose something else meanwhile
      ENGINE = eng; CACHED[token] = true;
      modeList();
      llmStatus(m.label + ' is on — answers in prose.');
    }).catch(function (e) {
      if (CHOICE !== token) return;
      CHOICE = ''; remember(''); modeList();
      llmStatus('Could not load ' + m.label + ': ' + String(e.message || e) + '. Back to keywords.');
    });
  }
  function setThinking(enabled) {
    THINKING = !!enabled;
    try { localStorage.setItem(THINK_KEY, THINKING ? '1' : '0'); } catch (e) { /* preference only */ }
    if (window.pkAskLLM) window.pkAskLLM.setThinking(THINKING);
    var control = el('pkq-thinking');
    if (control) control.checked = THINKING;
  }

  // ── evaluation hook: query_eval.py --engine webllm drives the page's own code ─────────
  window.pkAskEval = {
    _s: { done: false, log: [], results: [] },
    state: function () { return this._s; },
    start: function (questions, modelKey, opts) {
      var s = this._s = { done: false, log: [], results: [] };
      Promise.all([askScript(), llmScript()]).then(glossary).then(function () {
        return window.pkAskLLM.load(modelKey, function (t) { if (s.log.length < 400) s.log.push(t); });
      }).then(function (eng) {
        s.log.push('loaded ' + eng.id);
        return questions.reduce(function (pr, q) {
          return pr.then(function () {
            var t0 = performance.now(), n0 = eng.calls.length;
            return window.pkAsk.answer(q, DB, lexicon(), { engine: eng, explain: !!opts.explain, always: !!opts.always })
              .then(function (a) {
                var r = a.res && a.res[0];
                s.results.push({ question: q, error: null, ms: Math.round(performance.now() - t0),
                  intent: a.plan.intent, by: a.by, drugs: a.plan.drugs.map(function (d) { return d.slug; }),
                  params: a.plan.params ? a.plan.params.codes : null, model_plan: a.modelPlan || null,
                  model_error: a.modelError || null, sql: a.sql || null, rows: r ? r.values.length : 0,
                  summary: a.summary, explanation: a.explanation, dropped: a.dropped,
                  calls: eng.calls.slice(n0) });
              }, function (e) { s.results.push({ question: q, error: String(e && e.stack || e) }); })
              .then(function () { s.log.push(s.results.length + '/' + questions.length + ' ' + q); });
          });
        }, Promise.resolve());
      }).catch(function (e) { s.log.push('ERROR ' + String(e && e.stack || e)); })
        .then(function () { s.done = true; });
      return true;
    }
  };

  function askFromHash() {
    var m = /[?&]ask=([^&]*)/.exec(location.hash || '');
    if (!m) return false;
    var q = decodeURIComponent(m[1].replace(/\+/g, ' '));
    var last = TURNS.length && TURNS[TURNS.length - 1].querySelector('.pkq-q');
    if (last && last.textContent === q) return true;      // already asked: a re-render, not a new question
    ask(q);
    return true;
  }

  function boot() {
    if (DB) { el('pkq-status').hidden = true; el('pkq-ui').hidden = false; attach(); modeList(); llmStatus(ENGINE ? ENGINE.name + ' is on — answers in prose.' : ''); return; }
    if (loading) return;
    loading = true;
    window.pkdb.load(status).then(function (db) {
      DB = db;
      el('pkq-status').hidden = true;
      el('pkq-ui').hidden = false;
      attach();
      askScript().then(glossary);          // warm the lexicon and the glossary before the first question
      setTimeout(modeInit, 300);
      askFromHash();
    }).catch(function (e) { loading = false; status(String(e.message || e), true); });
  }

  var wired = false;
  hook.doneEach(function () {
    if (!document.getElementById('pkq')) return;     // every other page stops here
    if (!el('pkq-ask')) { status('The chat controls did not render — see query.md.', true); return; }
    boot();
    if (wired) return;
    wired = true;
    // DELEGATED, every node resolved at call time: docsify replaces .markdown-section
    // wholesale on each render, so handlers on captured elements would go stale.
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !document.getElementById('pkq')) return;
      if (t.id === 'pkq-askbtn') { var i = el('pkq-ask'); if (!BUSY && i.value.trim()) { ask(i.value); i.value = ''; } return; }
      var c = t.closest && t.closest('button.pkq-chip[data-ask]');
      if (c) ask(c.dataset.ask);
    });
    document.addEventListener('change', function (ev) {
      if (ev.target && ev.target.id === 'pkq-mode') choose(ev.target.value);
      if (ev.target && ev.target.id === 'pkq-thinking') setThinking(ev.target.checked);
    });
    document.addEventListener('keydown', function (ev) {
      var t = ev.target;
      if (t && t.id === 'pkq-ask' && ev.key === 'Enter' && !ev.isComposing) {
        ev.preventDefault();
        if (!BUSY && t.value.trim()) { ask(t.value); t.value = ''; }
      }
    });
  });
});
