const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  //emulateでデバイス指定。
  await page.emulate(devices['iPhone 6'])
  await page.goto('https://google.com/')
  //スクリーンショット撮る！
  await page.screenshot({path: 'full.png', fullPage: true})
  //ページタイトルを表示。
  console.log(await page.title())
  await browser.close()
})()
