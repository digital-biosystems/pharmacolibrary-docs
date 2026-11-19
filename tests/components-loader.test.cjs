const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/pk-components-loader.js'), 'utf8');

function harness() {
  const appended = [], registered = new Set();
  let manifestCalls = 0;
  const window = {$docsify:{plugins:[]}};
  const document = {
    createElement: () => ({remove(){this.removed = true;}}),
    head: {appendChild(tag){appended.push(tag);}},
    querySelector: () => null,
    querySelectorAll: () => [],
  };
  vm.runInNewContext(source, {
    window, document, console, setTimeout, clearTimeout,
    customElements: { get: name => registered.has(name), whenDefined: () => Promise.resolve() },
    fetch: async () => {
      manifestCalls++;
      return {ok:true,json:async()=>({base:'release/',entrypoints:{'dbs-fmusim':['shared.js','sim.js']}})};
    },
  });
  return {window, appended, registered, manifestCalls:()=>manifestCalls};
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test('ordinary pages do not fetch components or the release manifest', () => {
  const h = harness();
  h.window.$docsify.plugins[0]({doneEach: callback => callback()});
  assert.equal(h.manifestCalls(), 0);
  assert.equal(h.appended.length, 0);
});

test('concurrent requests share a promise and load the dependency before the entry', async () => {
  const h = harness();
  const a = h.window.pkComponents.load('dbs-fmusim');
  const b = h.window.pkComponents.load('dbs-fmusim');
  assert.equal(a, b);
  await tick();
  assert.deepEqual(h.appended.map(t=>t.src), ['release/shared.js']);
  h.appended[0].onload();
  await tick();
  assert.deepEqual(h.appended.map(t=>t.src), ['release/shared.js','release/sim.js']);
  h.registered.add('dbs-fmusim');
  h.appended[1].onload();
  await a;
  await h.window.pkComponents.load('dbs-fmusim');
  assert.equal(h.appended.length, 2);
});

test('a failed entry can retry without downloading its completed dependency again', async () => {
  const h = harness();
  const a = h.window.pkComponents.load('dbs-fmusim');
  const rejection = assert.rejects(a, /Could not load/);
  await tick();
  h.appended[0].onload();
  await tick();
  h.appended[1].onerror();
  await rejection;
  assert.equal(h.appended[1].removed, true);
  const retry = h.window.pkComponents.load('dbs-fmusim');
  await tick();
  assert.deepEqual(h.appended.map(t=>t.src), ['release/shared.js','release/sim.js','release/sim.js']);
  h.registered.add('dbs-fmusim');
  h.appended[2].onload();
  await retry;
});
