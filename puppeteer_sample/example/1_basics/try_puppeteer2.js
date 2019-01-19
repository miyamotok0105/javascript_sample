//https://try-puppeteer.appspot.com/
//http://vexus2.hatenablog.jp/entry/puppeteer_selector

//python -m http.server 8000

const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/');

    //row -> col -> itemDetail
    const rows = await page.$$('.row')
    for (const row of rows) {
      const itemDiv = await row.$('div.col > div.itemDetail')
      console.log(await (await itemDiv.getProperty('textContent')).jsonValue())
      const priceDiv = await row.$('p.price')
      console.log(await (await priceDiv.getProperty('textContent')).jsonValue())
    }
    await browser.close();

})()
