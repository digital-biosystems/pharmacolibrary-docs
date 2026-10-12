// Serve the repository over HTTP; requires Playwright + Chromium (see CONTRIBUTING.md).
// Checks both the full numerical trajectories and the displayed browser reference rows.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..');
const sim = require(path.join(root, 'assets/js/pk-sim.js'));
const base = process.env.SITE_URL || 'http://localhost:8765';
const curatedID = 'Clopidogrel_Jung2024';
const pgxID = curatedID + '_PGx_CYP2C19';
const readPayload = id => JSON.parse(fs.readFileSync(path.join(root, `drugs/drug_clopidogrel/${id}/${id}_params.json`)));

(async () => {
  const curated = readPayload(curatedID), pgx = readPayload(pgxID);
  assert.equal(pgx.base_model_id, curatedID);
  assert.deepEqual(pgx.parameters, curated.parameters);
  assert.deepEqual(pgx.observables, curated.observables);
  assert.deepEqual(pgx.reference_peaks, curated.reference_peaks);
  assert.deepEqual(pgx.pgx.phenotypes.Normal, {});
  assert.equal(pgx.parameters.adminMass, 0.0003);
  const meta = JSON.parse(fs.readFileSync(path.join(root, `assets/fmu/${curated.template}.vr.json`)));
  const factory = require(path.join(root, `assets/fmu/${curated.template}.js`));
  async function run(payload) {
    const model = await factory({print(){}, printErr(){}});
    return sim.run(model, meta, payload);
  }
  const reference = await run(curated);
  const normal = await run({...pgx, parameters: {...pgx.parameters, ...pgx.pgx.phenotypes.Normal}});
  assert.deepEqual(normal.t, reference.t);
  assert.deepEqual(normal.series, reference.series, 'Normal must reproduce every point of the curated PK curves');
  assert.deepEqual(normal.peak, reference.peak);
  const poor = await run({...pgx, parameters: {...pgx.parameters, ...pgx.pgx.phenotypes.Poor}});
  assert.ok(poor.peak.C_M1 < normal.peak.C_M1, 'Poor metabolizer must reduce active-metabolite formation');
  console.log('PASS exact Normal/curated trajectory and peak equality; phenotype effects remain active');

  const browser = await chromium.launch({headless:true, args:['--no-sandbox']});
  try {
    const pkPage = await browser.newPage();
    await pkPage.goto(base + '/#/drugs/drug_clopidogrel/' + curatedID);
    await pkPage.getByRole('tab', {name:'Simulation', exact:true}).click();
    await pkPage.waitForSelector('dbs-fmusim .ref tr td');
    const expectedRows = await pkPage.locator('dbs-fmusim .ref').innerText();

    const pgxPage = await browser.newPage();
    await pgxPage.goto(base + '/#/drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45');
    await pgxPage.getByRole('tab', {name:'Simulation', exact:true}).click();
    await pgxPage.waitForSelector('dbs-fmusim .pgx select');
    await pgxPage.locator('dbs-fmusim .pgx select').selectOption('Normal');
    await pgxPage.waitForFunction(text => document.querySelector('dbs-fmusim')?.shadowRoot?.querySelector('.ref')?.innerText === text, expectedRows);
    assert.match(await pgxPage.locator('dbs-fmusim').getAttribute('paramsurl'), /Clopidogrel_Jung2024_PGx_CYP2C19_params\.json$/);
    await pgxPage.locator('dbs-fmusim .pgx select').selectOption('Poor');
    await pgxPage.waitForFunction(text => document.querySelector('dbs-fmusim')?.shadowRoot?.querySelector('.ref')?.innerText !== text, expectedRows);
    await pgxPage.locator('dbs-fmusim .pgx select').selectOption('Normal');
    await pgxPage.waitForFunction(text => document.querySelector('dbs-fmusim')?.shadowRoot?.querySelector('.ref')?.innerText === text, expectedRows);
    console.log('PASS browser Normal reference rows match curated PK and recover after phenotype changes');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
