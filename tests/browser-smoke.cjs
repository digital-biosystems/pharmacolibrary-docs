// Serve the repository over HTTP. Requires Playwright + its Chromium browser.
// SITE_URL=http://localhost:8765 NODE_PATH=/path/to/node_modules node tests/browser-smoke.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.SITE_URL || 'http://localhost:8765';
const record = '#/drugs/drug_clopidogrel/Clopidogrel_Jung2024';

(async () => {
  const browser = await chromium.launch({headless:true, args:['--no-sandbox']});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    const errors = [], failed = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => {if (r.status() >= 400 && r.url().startsWith(base)) failed.push(`${r.status()} ${r.url()}`);});
    await page.goto(base);
    await page.waitForSelector('.pklg .tiles');
    assert.equal(await page.locator('script:not([src])').count(), 0);
    assert.equal(await page.locator('.markdown-section style').count(), 0);
    const heavy = await page.evaluate(() => performance.getEntriesByType('resource').map(r=>r.name).filter(n=>/sqlite|sql-wasm|vendor\/dbs-components|dbs-bundle/.test(n)));
    assert.deepEqual(heavy, [], 'homepage must not fetch simulation or database payloads');
    console.log('PASS homepage and lazy resources');

    await page.locator('.pks input').fill('clopidogrel');
    await page.waitForSelector('.pks-res a');
    assert.match(await page.locator('.pks-res').innerText(), /clopidogrel/i);
    console.log('PASS database-backed sidebar search');

    await page.goto(base + '/#/atc/B01A');
    await page.waitForSelector('.markdown-section .pklg');
    assert.equal(await page.locator('.markdown-section style').count(), 0);
    const keptFolder = await page.evaluate(() => {
      const nav = document.querySelector('.sidebar-nav');
      const link = nav.querySelector('a[href*="drugs/drug_clopidogrel/"]');
      if (!link) throw new Error('Missing clopidogrel sidebar link');
      const folder = Array.from(nav.querySelectorAll('li.folder')).find(li=>!li.contains(link));
      folder.classList.add('open');
      for (let node = link.parentElement; node && node !== nav; node = node.parentElement) {
        if (node.tagName === 'LI') node.classList.add('open');
      }
      const index = Array.from(nav.querySelectorAll('li')).indexOf(folder);
      link.click();
      return index;
    });
    await page.waitForFunction(() => /clopidogrel/i.test(document.querySelector('.markdown-section h1')?.textContent || ''));
    assert.ok(await page.evaluate(index => document.querySelectorAll('.sidebar-nav li')[index].classList.contains('open'), keptFolder));
    console.log('PASS sidebar folder state across navigation');
    await page.goto(base + '/#/ledger');
    await page.waitForSelector('.markdown-section .pklg details');
    await page.locator('.markdown-section .pklg summary').first().click();
    assert.ok(await page.locator('.markdown-section .pklg details[open]').count() > 0);
    console.log('PASS external ledger styling and ATC/ledger pages');

    await page.goto(base + record);
    await page.waitForSelector('.pk-tabbar');
    assert.equal(await page.locator('.pk-tabbar [role=tab]').count(), 3);
    await page.getByRole('tab', {name:'Simulation',exact:true}).click();
    await page.waitForFunction(() => document.querySelector('dbs-fmusim')?.shadowRoot?.querySelectorAll('.ref tr td').length > 0);
    const rows = await page.locator('dbs-fmusim').first().locator('.ref tbody tr').allTextContents();
    if (process.env.BASELINE_JSON) {
      const baseline = JSON.parse(fs.readFileSync(process.env.BASELINE_JSON));
      const oldRows = await page.evaluate(html => {
        const t = document.createElement('template'); t.innerHTML = html;
        return Array.from(t.content.querySelectorAll('.ref tbody tr'), tr=>tr.textContent);
      }, baseline.html);
      assert.deepEqual(rows, oldRows, 'simulation values and verdicts must match the original page');
    }
    assert.ok(rows.length > 0);
    assert.equal(await page.locator('.pk-crumbtrail').count(), 1);
    assert.equal(await page.locator('.pk-recpanel').count(), 1);
    assert.equal(await page.locator('dbs-pgx').count(), 0);
    assert.equal(await page.locator('script[src*="dbs-bundle"]').count(), 0);
    console.log('PASS record tabs, navigation, component registration and reference rows', rows);

    const sim = page.locator('dbs-fmusim').first();
    const slider = sim.locator('input[type=range]').first();
    await slider.evaluate(el=>{el.value = String(Number(el.value) + Number(el.step)); el.dispatchEvent(new Event('input',{bubbles:true}));});
    await page.evaluate(() => {
      const original = document.querySelector('dbs-fmusim');
      const clone = original.cloneNode(false); clone.id = 'second-simulator'; original.after(clone);
    });
    await page.waitForFunction(() => document.querySelector('#second-simulator')?.shadowRoot?.querySelectorAll('.ref tr td').length > 0);
    assert.deepEqual(await page.locator('#second-simulator').locator('.ref tbody tr').allTextContents(), rows);
    await page.locator('#second-simulator').evaluate(el=>el.remove());
    console.log('PASS two independent simulator instances');

    await page.goto(base + '/#/drugs/drug_clopidogrel/pd_Jung_2024_PRU');
    await page.waitForSelector('dbs-fmusim[paramsurl*="PD_pru"] .ref tr td');
    assert.match(await page.locator('dbs-fmusim .fmusim').innerText(), /response|PRU/i);
    await page.goto(base + '/#/drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference');
    await page.waitForSelector('dbs-fmusim[paramsurl*="Jung2024_reference/"] .pgx select');
    await page.waitForSelector('dbs-fmusim .ref tr td');
    const referenceRows = await page.locator('dbs-fmusim .ref').innerText();
    await page.locator('dbs-fmusim .pgx select').selectOption('Poor');
    await page.waitForFunction(previous => document.querySelector('dbs-fmusim')?.shadowRoot?.querySelector('.ref')?.innerText !== previous, referenceRows);
    console.log('PASS PD simulation and PGx phenotype change');

    await page.goto(base + '/#/query');
    await page.waitForSelector('#pkq-ui:not([hidden])');
    await page.locator('#pkq-ask').fill('clearance of metformin');
    await page.locator('#pkq-askbtn').click();
    await page.waitForFunction(() => document.querySelector('.pkq-a .pkq-text') && !document.querySelector('.pkq-a .pkq-text.pending'));
    assert.ok((await page.locator('.pkq-a').innerText()).length > 30);
    console.log('PASS query UI and deterministic answer');

    await page.goto(base + '/#/sites');
    await page.waitForSelector('#pks-ui:not([hidden])');
    await page.locator('#pks-pick').fill('clopidogrel');
    await page.waitForSelector('.pks-results button');
    await page.locator('.pks-results button').first().click();
    await page.waitForSelector('.pks-chips .pks-chip');
    assert.ok(await page.locator('#pks-pgx-gene option').count() > 0);
    await page.locator('button[data-pkstab="help"]').click();
    assert.equal(await page.locator('[data-pkspanel="help"]').isVisible(), true);
    assert.equal(await page.locator('[data-pkspanel="heatmap"]').isVisible(), false);
    await page.locator('button[data-pkstab="heatmap"]').click();
    assert.equal(await page.locator('[data-pkspanel="heatmap"]').isVisible(), true);
    console.log('PASS sites selection and PGx controls');

    await page.goto(base + record);
    await page.waitForSelector('dbs-fmusim .ref tr td');
    assert.equal(await page.locator('script[src$="dbs-shared.js"]').count(), 1);
    assert.equal(await page.locator('script[src$="dbs-fmusim.js"]').count(), 1);
    await page.setViewportSize({width:390,height:844});
    await page.getByRole('tab',{name:'Information',exact:true}).click();
    await page.getByRole('tab',{name:'Simulation',exact:true}).click();
    assert.equal(await page.locator('.pk-tabs').count(), 1);
    console.log('PASS route revisit and mobile tabs');
    assert.deepEqual(errors, [], 'browser JavaScript errors');
    assert.deepEqual(failed, [], 'failed local resources');
    console.log('All browser smoke checks passed');
  } finally { await browser.close(); }
})().catch(e => {console.error(e);process.exit(1);});
