const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Evaluate if Accordions are present
    const accCount = await page.locator('div[data-state]').count();
    console.log(`Number of accordion elements found: ${accCount}`);

    const qElement = page.getByRole('button', { name: "Este livro é baseado na Bíblia?" });
    const isVisible = await qElement.isVisible();
    console.log(`Accordion button visible: ${isVisible}`);

    // take a full page screenshot
    await page.screenshot({ path: path.join(__dirname, 'verification', 'full_page2.png'), fullPage: true });

    // click accordion
    if (isVisible) {
      await qElement.click();
      await page.waitForTimeout(1000); // wait for animation
      await page.screenshot({ path: path.join(__dirname, 'verification', 'accordion_open.png'), fullPage: true });
      console.log('Accordion opened and screenshot taken.');
    }

  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    await browser.close();
  }
})();
