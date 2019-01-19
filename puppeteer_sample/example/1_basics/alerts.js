
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')
  //dialogクラスを呼び出し、ダイアログが出た場合にカッコ内の処理をする。
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.dismiss()
  })
  //evaluateはブラウザ内の実行結果を返す。
  await page.evaluate(() => alert('This message is inside an alert box'))
  await browser.close()
})()
