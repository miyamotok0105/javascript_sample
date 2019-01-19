const puppeteer = require('puppeteer');

let browser, page;

(async () => {
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();
    await page.goto('https://www.google.co.jp/');
    await page.screenshot({path: 'google_async.png'});
    await browser.close();
})();

