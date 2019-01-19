const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  //ページにアクセス
  await page.goto('http://localhost:8000/')

  //row -> col -> itemDetail
  
  console.log("====================================");
  console.log("evaluateでdocument.getElementsByTagNameでdivのtextを取得");
  const summary = await page.evaluate(() => {
    // return document.getElementsByClassName('row')[0]
    return document.getElementsByTagName('div')[0].innerText
  })
  console.log(summary)
  
  console.log("====================================");
  console.log("evaluateでdocument.getElementsByClassNameのclassのrowのtextを取得");
  let texts = await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByClassName('row');
    for (var element of elements)
        data.push(element.textContent);
    return data;
  });
  console.log(texts);
  
  
  await browser.close()
})()
