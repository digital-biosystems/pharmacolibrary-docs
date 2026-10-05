/* pk-ask-llm.js — the optional in-browser language model behind "ask in words"
 * (IMPROVEMENTS_CHAT.md phase 2). Loaded only when a reader asks for it.
 *
 * WebLLM runs the model on the reader's GPU (WebGPU); the weights are downloaded once from
 * Hugging Face and kept in the browser's IndexedDB. Nothing is sent anywhere else. This file
 * only adapts WebLLM to the engine interface pk-ask.js expects:
 *   { name, json(messages, schema) → Promise<object>, text(messages, maxTokens) → Promise<string> }
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
  var lib = null, engines = {};

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

  // Thinking off: a plan is a short JSON object, and the time to the first token is the wait.
  // Older WebLLM builds reject extra_body; the request is retried without it.
  async function create(mlc, req) {
    req.extra_body = { enable_thinking: false };
    try { return await mlc.chat.completions.create(req); } catch (e) {
      if (!/extra_body|enable_thinking/i.test(String(e.message || e))) throw e;
      delete req.extra_body;
      return mlc.chat.completions.create(req);
    }
  }
  function clean(s) { return String(s || '').replace(/<think>[\s\S]*?<\/think>/g, '').trim(); }

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
      json: async function (messages, schema) {
        var t0 = performance.now();
        var r = await create(mlc, { messages: messages, temperature: 0, max_tokens: 120,
                                    response_format: { type: 'json_object', schema: JSON.stringify(schema) } });
        eng.calls.push({ ms: Math.round(performance.now() - t0), prompt_tokens: r.usage && r.usage.prompt_tokens,
                         tokens: r.usage && r.usage.completion_tokens });
        return JSON.parse(clean(r.choices[0].message.content));
      },
      text: async function (messages, maxTokens) {
        var t0 = performance.now();
        var r = await create(mlc, { messages: messages, temperature: 0, max_tokens: maxTokens || 200 });
        eng.calls.push({ ms: Math.round(performance.now() - t0), prompt_tokens: r.usage && r.usage.prompt_tokens,
                         tokens: r.usage && r.usage.completion_tokens });
        return clean(r.choices[0].message.content);
      },
      unload: function () { delete engines[id]; return mlc.unload(); }
    };
    engines[id] = eng;
    return eng;
  }

  root.pkAskLLM = { MODELS: MODELS, support: support, load: load, cached: cached };
})(typeof window !== 'undefined' ? window : globalThis);
