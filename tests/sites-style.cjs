// Serve the repository over HTTP; requires Playwright + Chromium (see CONTRIBUTING.md).
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.SITE_URL || 'http://localhost:8765';

(async () => {
  const browser = await chromium.launch({headless: true, args: ['--no-sandbox']});
  try {
    const page = await browser.newPage();
    await page.goto(base + '/#/sites?drugs=midazolam,ketoconazole');
    await page.waitForSelector('.pks-hm td.aff .pks-dots i');
    for (const width of [1440, 390]) {
      await page.setViewportSize({width, height: 1000});
      const normalBorder = await page.locator('.pks-hm td[data-d]:not(.aff)').first()
        .evaluate(el => getComputedStyle(el).borderTop);
      const cells = await page.locator('.pks-hm td.aff').evaluateAll(elements => elements.map(el => {
        const style = getComputedStyle(el);
        return {shadow: style.boxShadow, border: style.borderTop,
          dots: el.querySelectorAll('.pks-dots i').length};
      }));
      assert.ok(cells.length > 0);
      assert.ok(cells.every(cell => cell.shadow === 'none' && cell.border === normalBorder && cell.dots > 0),
        'affected heat-map cells must retain interaction dots without an outline');
      assert.equal(await page.locator('.pks-evkey i.aff').count(), 0);
      for (const [tier, label, colour] of [
        ['e3', 'DrugBank actor', 'rgb(152, 120, 217)'],
        ['e2', 'PGx paper', 'rgb(85, 157, 224)'],
        ['e1', 'DrugBank ADME', 'rgb(85, 190, 196)'],
      ]) {
        const swatch = page.locator('.pks-evkey i.' + tier);
        assert.equal(await swatch.evaluate(el => el.parentElement.textContent.trim()), label);
        assert.equal(await swatch.evaluate(el => getComputedStyle(el).backgroundColor), colour);
      }
      console.log(`PASS Sites evidence colours, labels and border-free interaction dots at ${width}px`);
    }
    await page.locator('#pks-ddi').uncheck();
    assert.equal(await page.locator('.pks-hm td.aff').count(), 0);
    assert.equal(await page.locator('.pks-hm .pks-dots i').count(), 0);
    await page.locator('#pks-ddi').check();
    await page.waitForSelector('.pks-hm td.aff .pks-dots i');
    console.log('PASS co-administration toggle');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
