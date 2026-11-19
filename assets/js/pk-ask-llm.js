/* pk-ask-llm.js — the optional in-browser language model behind "ask in words"
 * (IMPROVEMENTS_CHAT.md phase 2). Loaded only when a reader asks for it.
 *
 * WebLLM runs the model on the reader's GPU (WebGPU); the weights are downloaded once from
 * Hugging Face and kept in the browser's IndexedDB. Nothing is sent anywhere else. This file
 * only adapts WebLLM to the engine interface pk-ask.js expects:
 *   { name, json(messages, schema) → Promise<object>,
 *     text(messages, maxTokens, onUpdate?, onThinking?) → Promise<string> }
 *
 *   pkAskLLM.support()            → Promise<{ok, why, f16}>
 *   pkAskLLM.load(key, progress)  → Promise<engine>      (key: a MODELS entry's key)
 *   pkAskLLM.cached(key)          → Promise<bool>        (already downloaded?)
 */
(function (root) {
  'use strict';
  var CDN = 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.84/+esm';
  // f16 builds where the GPU has shader-f16, else the f32 build of the same weights. The
  // choice is pk_knowledge_scripts.docs.query_eval's: on the 50 golden questions keywords alone
  // pass 36, Qwen3.5 0.8B 43, 4B 47, 9B 50 (2B, 42, adds nothing over 0.8B). gb is the
  // download (the MLC shards on Hugging Face), vram the GPU memory WebLLM asks for.
  var MODELS = [
    { key: 'qwen3.5-0.8b', label: 'Qwen3.5 0.8B', f16: 'Qwen3.5-0.8B-q4f16_1-MLC', f32: 'Qwen3.5-0.8B-q4f32_1-MLC', gb: 0.5, vram: 1.7 },
    { key: 'qwen3.5-4b', label: 'Qwen3.5 4B', f16: 'Qwen3.5-4B-q4f16_1-MLC', f32: 'Qwen3.5-4B-q4f32_1-MLC', gb: 2.4, vram: 3.9 },
    { key: 'qwen3.5-9b', label: 'Qwen3.5 9B', f16: 'Qwen3.5-9B-q4f16_1-MLC', f32: 'Qwen3.5-9B-q4f32_1-MLC', gb: 5.1, vram: 6.5 }
  ];
  var lib = null, engines = {}, thinkingEnabled = false;

  function webllm() { return lib || (lib = import(CDN)); }
  function model(key) {
    for (var i = 0; i < MODELS.length; i++) if (MODELS[i].key === key) return MODELS[i];
    return MODELS[0];
  }

  var gpu = null;
  function support() {
    if (gpu) return gpu;
    gpu = (async function () {
      if (!root.navigator || !navigator.gpu) return { ok: false, why: 'this browser has no WebGPU (recent Chrome or Edge on a desktop has it)' };
      try {
        var a = await navigator.gpu.requestAdapter();
        if (!a) return { ok: false, why: 'WebGPU is present but found no usable GPU' };
        return { ok: true, f16: a.features.has('shader-f16') };
      } catch (e) { return { ok: false, why: String(e.message || e) }; }
    })();
    return gpu;
  }

  async function config() {
    var w = await webllm();
    var cfg = JSON.parse(JSON.stringify(w.prebuiltAppConfig));
    cfg.useIndexedDBForCache = true;
    return cfg;
  }
  async function modelId(key) {
    var s = await support(), m = model(key);
    return s.f16 ? m.f16 : m.f32;
  }

  async function cached(key) {
    try {
      var w = await webllm();
      return await w.hasModelInCache(await modelId(key), await config());
    } catch (e) { return false; }
  }

  // Older WebLLM builds reject extra_body; retry without it. Planning is always non-thinking;
  // the reader's switch applies to prose answers only.
  async function create(mlc, req, enableThinking) {
    req.extra_body = { enable_thinking: !!enableThinking };
    while (true) {
      try { return await mlc.chat.completions.create(req); } catch (e) {
        var message = String(e.message || e);
        if (req.extra_body && /extra_body|enable_thinking/i.test(message)) delete req.extra_body;
        else if (req.stream_options && /stream_options|include_usage/i.test(message)) delete req.stream_options;
        else throw e;
      }
    }
  }
  function splitThinking(s) {
    var thoughts = [];
    var answer = String(s || '').replace(/<think>([\s\S]*?)(?:<\/think>|$)/g, function (_, text) {
      thoughts.push(text);
      return '';
    });
    return { thinking: thoughts.join('\n').trim(), answer: answer.trim() };
  }
  function clean(s) { return splitThinking(s).answer; }

  async function load(key, progress) {
    var s = await support();
    if (!s.ok) throw new Error(s.why);
    var id = await modelId(key);
    if (engines[id]) return engines[id];
    var w = await webllm();
    var mlc = await w.CreateMLCEngine(id, {
      appConfig: await config(),
      initProgressCallback: function (r) { if (progress) progress(r.text, r.progress); }
    });
    var eng = {
      name: model(key).label, id: id, calls: [],
      recordCall: async function (kind, t0, usage) {
        var ms = Math.round(performance.now() - t0), runtimeStats = '';
        if (kind === 'text' && typeof mlc.runtimeStatsText === 'function') {
          try { runtimeStats = await mlc.runtimeStatsText(); } catch (e) { /* stats are optional */ }
        }
        eng.calls.push({ kind: kind, ms: ms, prompt_tokens: usage && usage.prompt_tokens,
                         tokens: usage && usage.completion_tokens, runtime_stats: runtimeStats });
      },
      json: async function (messages, schema) {
        var t0 = performance.now();
        var r = await create(mlc, { messages: messages, temperature: 0, max_tokens: 120,
                                    response_format: { type: 'json_object', schema: JSON.stringify(schema) } }, false);
        await eng.recordCall('plan', t0, r.usage);
        return JSON.parse(clean(r.choices[0].message.content));
      },
      text: async function (messages, maxTokens, onUpdate, onThinking) {
        var t0 = performance.now();
        if (typeof onUpdate !== 'function' && typeof onThinking !== 'function') {
          var r = await create(mlc, { messages: messages, temperature: 0, max_tokens: maxTokens || 200 }, thinkingEnabled);
          await eng.recordCall('text', t0, r.usage);
          return clean(r.choices[0].message.content);
        }

        var stream = await create(mlc, { messages: messages, temperature: 0, max_tokens: maxTokens || 200,
                                         stream: true, stream_options: { include_usage: true } }, thinkingEnabled);
        var content = '', usage = null;
        for await (var chunk of stream) {
          var choice = chunk.choices && chunk.choices[0];
          var delta = choice && choice.delta && choice.delta.content;
          if (delta) {
            content += delta;
            var parts = splitThinking(content);
            if (thinkingEnabled && typeof onThinking === 'function' && parts.thinking)
              onThinking(parts.thinking);
            if (typeof onUpdate === 'function') onUpdate(parts.answer);
          }
          if (chunk.usage) usage = chunk.usage;
        }
        await eng.recordCall('text', t0, usage);
        return clean(content);
      },
      unload: function () { delete engines[id]; return mlc.unload(); }
    };
    engines[id] = eng;
    return eng;
  }

  root.pkAskLLM = {
    MODELS: MODELS, support: support, load: load, cached: cached,
    setThinking: function (enabled) { thinkingEnabled = !!enabled; }
  };
})(typeof window !== 'undefined' ? window : globalThis);
