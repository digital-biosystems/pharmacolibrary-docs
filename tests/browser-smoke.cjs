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
    // the home route IS README.md — the whole front page, no sidebar — with the flying
    // section line instead (pk-cover.js); a content route brings the sidebar back
    await page.goto(base);
    await page.waitForSelector('.markdown-section h1');
    assert.match(await page.locator('.markdown-section h1').first().innerText(), /Pharmacolibrary/,
      'the home route renders the README front page');
    assert.ok((await page.locator('.markdown-section .pk-home-card').count()) >= 3,
      'the home route carries the intro\'s tiles, not only a hero');
    assert.equal(await page.locator('.pk-covernav a').count(), 5, 'the flying line carries five links');
    assert.equal(await page.locator('.sidebar').evaluate(el => getComputedStyle(el).display), 'none',
      'the sidebar must be hidden on the home route');
    assert.equal(await page.locator('script:not([src])').count(), 0);
    assert.equal(await page.locator('.markdown-section style').count(), 0);
    const heavy = await page.evaluate(() => performance.getEntriesByType('resource').map(r=>r.name).filter(n=>/dbs-bundle|vendor\/dbs-components/.test(n)));
    assert.deepEqual(heavy, [], 'the home route never loads the record simulator\'s component bundle');
    // (the demo tiles may load pk-sim / the ADME database — only when the tiles are in
    // view, which on this viewport they are)
    // a flying-line link navigates to a content route and the sidebar comes back
    await page.locator('.pk-covernav a', { hasText: 'Drugs' }).first().click();
    await page.waitForSelector('.markdown-section .pklg');
    assert.notEqual(await page.locator('.sidebar').evaluate(el => getComputedStyle(el).display), 'none',
      'a content route must show the sidebar again');
    assert.equal(await page.locator('.pk-covernav').count(), 0,
      'the flying line leaves with the home route');
    console.log('PASS cover presentation (README without sidebar) and content routes');

    // the demo tiles: pk-sim.js drives the clopidogrel record (active metabolite only,
    // dose + CYP2C19 controls, the default run beside it) and pk-sites draws the anatomy
    await page.goto(base);
    await page.locator('.pk-demo-anat').scrollIntoViewIfNeeded();
    await page.waitForSelector('.pk-demo-plot svg path', {timeout: 90000});
    assert.equal(await page.locator('.pk-demo-svg path').count(), 2);
    assert.match(await page.locator('.pk-demo-delta').innerText(), /±0/);
    await page.locator('.pk-demo-bar select').selectOption('Poor');
    await page.waitForFunction(
      () => !/±0/.test(document.querySelector('.pk-demo-delta')?.innerText || 'x'));
    assert.ok((await page.locator('.pk-demo-anat svg .organ').count()) > 0, 'anatomogram organs drawn');
    console.log('PASS demo tiles: active-metabolite simulator and anatomogram');

    await page.goto(base + '/#/atc/B01A');
    await page.waitForSelector('.markdown-section .pklg');
    // the ledger tiles live on the About page (pipeline.md) in the v26.09 layout; the ledger
    // stylesheet must present them as the grid layout
    await page.goto(base + '/#/pipeline');
    await page.waitForSelector('.pklg .tiles');
    assert.equal(await page.locator('.pklg .tiles').evaluate(el => getComputedStyle(el).display), 'grid',
      'ledger tiles must use the ledger grid layout');
    for (const selector of ['.pklg .tile', '.pklg .cbox']) {
      const boxes = await page.locator(selector).evaluateAll(elements => elements.map(el => {
        const style = getComputedStyle(el);
        return {border: style.borderTopStyle, width: parseFloat(style.borderTopWidth),
          padding: parseFloat(style.paddingLeft)};
      }));
      assert.ok(boxes.length > 0, `homepage must contain ${selector} boxes`);
      assert.ok(boxes.every(box => box.border === 'solid' && box.width >= 1 && box.padding > 0),
        `${selector} boxes must have visible borders and padding`);
    }
    console.log('PASS homepage, ledger tiles on the About page and lazy resources');

    await page.locator('.pks input').fill('clopidogrel');
    await page.waitForSelector('.pks-res a');
    assert.match(await page.locator('.pks-res').innerText(), /clopidogrel/i);
    console.log('PASS database-backed sidebar search');

    // the HOME page's search box drives the whole brand chain; the sidebar search below
    // needs a content route (on the home route the sidebar is hidden)
    await page.locator('.pks input').fill('plavix');
    await page.waitForFunction(
      () => document.querySelector('.pks-res li.pks-drughead')?.textContent.includes('brand plavix'));
    assert.match(await page.locator('.pks-res li.pks-drughead').innerText(), /Clopidogrel/);
    await page.locator('.pks input').press('ArrowDown');
    assert.equal(await page.locator('.pks input').getAttribute('aria-activedescendant'), 'pks-opt-0');
    await page.locator('.pks input').press('Enter');
    await page.waitForFunction(() => location.hash === '#/drugs/drug_clopidogrel/');
    await page.waitForSelector('.markdown-section h1');
    await page.locator('.pks input').fill('aspirin');
    await page.locator('.pks input').press('Escape');
    assert.equal(await page.locator('.pks input').getAttribute('aria-expanded'), 'false');
    console.log('PASS sidebar brand → drug header card (combobox keys)');

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
    assert.match(await page.evaluate(() => location.hash), /#\/ledger\/$/,
      'the legacy #/ledger route must be redirected to the sharded overview');
    // a run-group link in the overview's index navigates as a ROUTE, not as a same-page
    // anchor (docsify rewrites '#/…' markdown links into ?id= anchors; the generator
    // therefore writes '/ledger/…' markdown links)
    await page.locator('.markdown-section a[href*="#/ledger/dg-"]').first().click();
    await page.waitForFunction(() => /^#\/ledger\/dg-/.test(location.hash));
    await page.waitForSelector('.markdown-section .pklg details[open]');
    console.log('PASS external ledger styling and ATC/ledger pages');

    // a link may name the tab (the drug page's "Start here" links use ?tab=)
    await page.goto(base + record + '?tab=Models');
    await page.waitForSelector('.pk-tabbar');
    assert.match(await page.locator('.pk-tabbar [aria-selected="true"]').innerText(), /Models/,
      'the ?tab= deep-link must open the named tab');

    await page.goto(base + record);
    await page.waitForSelector('.pk-tabbar');
    assert.equal(await page.locator('.pk-tabbar [role=tab]').count(), 3);
    // WAI-ARIA tabs (pk-tablist.js, auto mode): the rover follows focus and arrows move
    // selection with it
    const tabs = page.locator('.pk-tabbar [role=tab]');
    await tabs.nth(0).focus();
    assert.equal(await tabs.nth(0).evaluate(el => el.tabIndex), 0);
    assert.equal(await tabs.nth(1).evaluate(el => el.tabIndex), -1);
    await page.keyboard.press('ArrowRight');
    assert.match(await page.locator('.pk-tabbar [aria-selected="true"]').innerText(), /Models/);
    await page.keyboard.press('Home');
    assert.match(await page.locator('.pk-tabbar [aria-selected="true"]').innerText(), /Information/);
    await page.keyboard.press('End');
    assert.match(await page.locator('.pk-tabbar [aria-selected="true"]').innerText(), /Simulation/);
    console.log('PASS tab keyboard: roving tabindex and arrows');
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

    // an exact drug name / brand asked verbatim opens the turn with the drug quick-card
    await page.locator("#pkq-ask").fill("plavix");
    await page.locator("#pkq-ask").press("Enter");
    await page.waitForFunction(
      () => [...document.querySelectorAll('.pkq-turn .pkq-drughead a')].some(a => a.href.endsWith('#/drugs/drug_clopidogrel/')));
    assert.match(await page.locator('.pkq-turn .pkq-drughead .d').last().innerText(), /brand plavix/i);
    assert.equal(await page.locator('#pkq-status').getAttribute('role'), 'status');
    // the answer must settle before the flow leaves: ask() drops questions while BUSY
    await page.waitForFunction(
      () => { const t = document.querySelector('.pkq-a .pkq-text'); return t && !t.classList.contains('pending'); });
    console.log('PASS query drug quick-card (status live region, Enter to ask)');

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
    // manual tablist on the Sites views (pk-tablist.js): arrows move FOCUS only, Enter
    // activates through the button's native click
    await page.locator("button[data-pkstab='help']").focus();
    await page.keyboard.press('ArrowRight');
    const moved = await page.evaluate(() => document.activeElement?.dataset?.pkstab || '');
    assert.ok(moved && moved !== 'help', 'arrow must move focus to the next tab');
    const sel = await page.evaluate(() =>
      document.querySelector('#pks-views .pk-tabbar [aria-selected="true"]')?.dataset?.pkstab);
    assert.equal(sel, 'heatmap', 'manual mode: focus alone must not select');
    await page.keyboard.press('Enter');
    assert.match(await page.locator('#pks-views .pk-tabbar [aria-selected="true"]').innerText(), /diagnosis|table|ddi|body|shared|help/i);
    console.log('PASS sites views tablist keyboard');

    await page.goto(base + record);
    await page.waitForSelector('dbs-fmusim .ref tr td');
    assert.equal(await page.locator('script[src$="dbs-shared.js"]').count(), 1);
    assert.equal(await page.locator('script[src$="dbs-fmusim.js"]').count(), 1);
    await page.setViewportSize({width:390,height:844});
    await page.getByRole('tab',{name:'Information',exact:true}).click();
    await page.getByRole('tab',{name:'Simulation',exact:true}).click();
    assert.equal(await page.locator('.pk-tabs').count(), 1);
    console.log('PASS route revisit and mobile tabs');

    // the front-page box is a pure redirect (no data on the landing page); it lives in the
    // intro at #/README now that #/ is the cover, and resolution happens at /query
    await page.goto(base + '/#/README');
    await page.locator('.pk-home-search input').fill('Glucophage');
    await page.locator('.pk-home-search input').press('Enter');
    await page.waitForFunction(() => /^#\/query\?ask=Glucophage/.test(location.hash));
    await page.waitForFunction(
      () => [...document.querySelectorAll('.pkq-turn .pkq-drughead .name')].pop()?.textContent === 'Metformin');
    console.log('PASS front-page redirect → drug quick-card');
    assert.deepEqual(errors, [], 'browser JavaScript errors');
    assert.deepEqual(failed, [], 'failed local resources');
    console.log('All browser smoke checks passed');
  } finally { await browser.close(); }
})().catch(e => {console.error(e);process.exit(1);});
