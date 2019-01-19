const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  //ページにアクセス
  await page.goto('http://localhost:8000/')

  //row -> col -> itemDetail
  
  console.log("====================================");
  console.log("evaluateでdocument.getElementsByTagNameでdivのtextを取得");
  const summary = await page.$eval('div', selector => {
    return selector.textContent
  })
  console.log(summary)
  
  console.log("====================================");
  console.log("evaluateでdocument.getElementsByClassNameのclassのrowのtextを取得");
  const texts = await page.$$eval('.row', selector => {
    return selector[0].textContent
  })
  console.log(texts)
  
  
  await browser.close()
})()
