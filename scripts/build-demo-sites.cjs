#!/usr/bin/env node
// scripts/build-demo-sites.cjs — the home page anatomogram's data, without the ADME database.
//
// The tile draws one drug, but computing that drawing in the browser means downloading sql.js
// and the whole ADME database (8 MB) on every first visit. This runs the same compute() once and
// stores its result in data/demo-sites.json, a few kB. The file names the database it came from;
// pk-demo.js uses it only while that is still the published one and otherwise falls back to the
// database, so a stale file costs a download, never a wrong picture.
//
//   node scripts/build-demo-sites.cjs [drug]        # default: clopidogrel
//
// The generator's _publish_adme_database runs this whenever it publishes the ADME database.
const fs = require('fs');
const path = require('path');

const site = path.resolve(__dirname, '..');
const data = path.join(site, 'data');
const drug = process.argv[2] || 'clopidogrel';

global.window = global.window || {};
const initSqlJs = require(path.join(site, 'assets/sqljs/sql-wasm.js'));
require(path.join(site, 'assets/js/pk-sites.js'));

initSqlJs({ locateFile: (f) => path.join(site, 'assets/sqljs', f) }).then((SQL) => {
  const meta = JSON.parse(fs.readFileSync(path.join(data, 'adme-latest.json'), 'utf8'));
  const db = new SQL.Database(fs.readFileSync(path.join(data, meta.file)));
  const { pkSites } = global.window;
  const drugs = pkSites.resolve(db, [drug]);
  if (!drugs.length) throw new Error(`${drug} is not in ${meta.file}`);
  // the options pk-demo.js would compute with; M.sites (every gene in the database) is what
  // compute() joins with and the body view never reads
  const model = pkSites.compute(db, drugs, { text: false });
  delete model.sites;
  const text = `${JSON.stringify({ adme: meta.file, drug, model })}\n`;
  const out = path.join(data, 'demo-sites.json');
  if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== text) fs.writeFileSync(out, text);
  console.log(`demo-sites.json: ${drug}, ${model.rows.length} rows, ${text.length} bytes, from ${meta.file}`);
}).catch((e) => {
  console.error(`build-demo-sites: ${e.message || e}`);
  process.exit(1);
});
