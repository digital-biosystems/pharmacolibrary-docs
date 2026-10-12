// Serve the repository over HTTP; requires Playwright + Chromium (see CONTRIBUTING.md).
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.SITE_URL || 'http://localhost:8765';
const route = base + '/#/sites?drugs=midazolam,ketoconazole&pgx=CYP2C19:PM';

(async () => {
  const browser = await chromium.launch({headless: true, args: ['--no-sandbox']});
  try {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({viewport: {width, height: 1000}});
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(route);
      await page.waitForSelector('.pks-hm td.aff .pks-dots i');
      const panels = page.locator('#pks-views [data-pkspanel]');
      const visible = page.locator('#pks-views [data-pkspanel]:not([hidden])');
      const toggle = page.locator('#pks-view-toggle');
      assert.equal(await panels.count(), 7);
      assert.equal(await visible.count(), 1);
      assert.equal(await toggle.innerText(), 'Show all sections');
      await page.getByRole('tab', {name: 'Who affects whom', exact: true}).click();
      assert.equal(await visible.getAttribute('data-pkspanel'), 'ddi');
      await page.locator('#pks-text').uncheck();
      const state = await page.evaluate(() => ({
        hash: location.hash,
        drugs: document.querySelector('#pks-chips').textContent,
        pgx: document.querySelector('#pks-pgx-chips').textContent,
        heatmap: document.querySelector('.pks-heatmap').innerHTML,
      }));
      await toggle.click();
      assert.equal(await toggle.innerText(), 'Use tabs');
      assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
      assert.equal(await visible.count(), 7);
      assert.equal(await page.locator('.pks-section-heading:visible').count(), 7);
      assert.equal(await page.getByRole('tab').count(), 0);
      const stacked = await panels.evaluateAll(elements => elements.every((el, i) =>
        !i || el.getBoundingClientRect().top >= elements[i - 1].getBoundingClientRect().bottom));
      assert.ok(stacked, 'expanded sections must stack vertically');
      await page.getByRole('link', {name: 'Help', exact: true}).click();
      assert.equal(await visible.count(), 7);
      assert.equal(await page.evaluate(() => location.hash), state.hash, 'jump links must not change the Docsify route');
      assert.equal(await page.evaluate(() => document.activeElement.id), 'pks-heading-help');
      assert.ok(await page.locator('#pks-heading-help').evaluate(el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= innerHeight;
      }), 'jump navigation must bring the section heading into view');
      await toggle.click();
      assert.equal(await visible.count(), 1);
      assert.equal(await visible.getAttribute('data-pkspanel'), 'help');
      assert.equal(await page.getByRole('tab', {name: 'Help', exact: true}).getAttribute('aria-selected'), 'true');
      assert.equal(await page.locator('#pks-text').isChecked(), false);
      assert.deepEqual(await page.evaluate(() => ({
        hash: location.hash,
        drugs: document.querySelector('#pks-chips').textContent,
        pgx: document.querySelector('#pks-pgx-chips').textContent,
        heatmap: document.querySelector('.pks-heatmap').innerHTML,
      })), state, 'changing layouts must preserve the controls and rendered data');
      // Keyboard activation and session preference survive reloads and route revisits.
      await toggle.focus();
      await page.keyboard.press('Enter');
      await page.reload();
      await page.waitForSelector('#pks-ui:not([hidden])');
      assert.equal(await visible.count(), 7);
      assert.equal(await toggle.innerText(), 'Use tabs');
      await page.goto(base + '/#/');
      await page.waitForSelector('.pklg .tiles');
      await page.goto(route);
      await page.waitForSelector('#pks-ui:not([hidden])');
      assert.equal(await visible.count(), 7);
      assert.equal(await page.locator('.pks-section-heading').count(), 7, 'headings must not be duplicated');
      await toggle.click();
      assert.equal(await visible.getAttribute('data-pkspanel'), 'help');
      assert.deepEqual(errors, []);
      console.log(`PASS Sites tabbed/expanded layouts, jump links, preserved state and session preference at ${width}px`);
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
