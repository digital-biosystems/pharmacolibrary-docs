// Serve the repository over HTTP; requires Playwright + Chromium (see CONTRIBUTING.md).
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const base = process.env.SITE_URL || 'http://localhost:8765';
const drugs = ['metformin', 'ibuprofen', 'amoxicillin', 'semaglutide', 'tolvaptan', 'allopurinol', 'clopidogrel'];

(async () => {
  const browser = await chromium.launch({headless: true, args: ['--no-sandbox']});
  let checked = 0;
  try {
    for (const drug of drugs) {
      const dir = path.join(root, 'drugs', 'drug_' + drug);
      for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.md'))) {
        const text = fs.readFileSync(path.join(dir, file), 'utf8');
        const match = text.match(/<figure class="pk-models-diagram"><img src="([^"]+)"/);
        if (!match) continue;
        assert.ok(fs.existsSync(path.join(root, match[1])), match[1]);
        const response = await fetch(base + '/' + match[1]);
        assert.equal(response.status, 200, match[1]);
        checked++;
      }
    }
    assert.ok(checked > 0, 'ddd must have published model diagrams');
    const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
    for (const record of ['Clopidogrel_Jung2024', 'pgx_Jung_2024_CYP2C19_Q45']) {
      await page.goto(base + '/#/drugs/drug_clopidogrel/' + record);
      await page.getByRole('tab', {name: 'Models', exact: true}).click();
      const img = page.locator('figure.pk-models-diagram img');
      await img.waitFor({state: 'visible'});
      await page.waitForFunction(() => {
        const img = document.querySelector('figure.pk-models-diagram img');
        return img?.complete && img.naturalWidth > 0 && img.getBoundingClientRect().width > 0;
      });
      if (record === 'Clopidogrel_Jung2024') await img.screenshot({path: '/tmp/opencode/ddd-clopidogrel-diagram.png'});
    }
    console.log(`PASS ${checked} ddd SVG links return HTTP 200; curated PK and PGx diagrams render in Models`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
