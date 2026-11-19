// Serve the repository over HTTP; requires Playwright + Chromium (see CONTRIBUTING.md).
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.SITE_URL || 'http://localhost:8765';

(async () => {
  const browser = await chromium.launch({headless: true, args: ['--no-sandbox']});
  try {
    const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
    await page.goto(base);
    await page.waitForSelector('.sidebar-nav > ul > li.folder');
    const headings = await page.locator('.sidebar-nav > ul > li > strong').allTextContents();
    assert.deepEqual(headings, ['ATC', 'non-ATC', 'toxins', 'Special groups']);
    const folder = page.locator('.sidebar-nav > ul > li').filter({has: page.locator('strong', {hasText: /^non-ATC$/})});
    const entries = JSON.parse(fs.readFileSync(path.join(__dirname, '../.index.json'), 'utf8'));
    const expected = Object.entries(entries).filter(([key, e]) => !key.startsWith('toxin_') &&
      !(e.dir || '').startsWith('toxin_') && !(e.atc_codes || []).some(Boolean)).map(([, e]) => e);
    const hasPage = e => e.rendered !== false && fs.existsSync(
      path.join(__dirname, '../drugs', e.dir || 'drug_' + e.slug, 'README.md'));
    const links = await folder.locator('a').evaluateAll(elements => elements.map(el => el.getAttribute('href')));
    assert.equal(await folder.locator('li').count(), expected.length);
    assert.equal(links.length, expected.filter(hasPage).length);
    for (const e of expected.filter(hasPage)) {
      assert.ok(links.some(href => href.includes('drugs/' + (e.dir || 'drug_' + e.slug) + '/')));
      assert.ok(fs.existsSync(path.join(__dirname, '../drugs', e.dir || 'drug_' + e.slug, 'README.md')));
    }
    for (const e of expected.filter(e => !hasPage(e))) {
      assert.ok((await folder.textContent()).includes(e.name));
      assert.ok(!links.some(href => href.includes('drugs/' + (e.dir || 'drug_' + e.slug) + '/')));
    }
    assert.ok(links.every(href => !href.includes('toxin_')));
    assert.equal(await folder.locator('a').first().isVisible(), false);
    await folder.locator(':scope > strong').click();
    await folder.locator('a').first().waitFor({state: 'visible'});
    await folder.locator('a').first().click();
    await page.waitForFunction(() => /Arketamine/i.test(document.querySelector('.markdown-section h1')?.textContent || ''));
    assert.deepEqual(await page.locator('.sidebar-nav > ul > li > strong').allTextContents(), headings);
    console.log(`PASS sidebar category order, folding and ${links.length} non-ATC drug links`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
