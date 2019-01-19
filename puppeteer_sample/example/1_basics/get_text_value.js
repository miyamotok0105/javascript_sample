const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com/news')
  //
  const name = await page.$eval('.hnname > a', el => el.innerText)
  console.log(name)
  
  //テキスト要素を取得する！！！！！！！！！！！！！！！！！

  //innerTextとtextContentの違い。
  //[textContent]
  // 画面上に表示されていないテキストも取得する
  // ブラウザごとの挙動の差異が小さい
  //[innerText]
  // 画面上に表示されているテキストのみを取得する
  // ブラウザごとの挙動の差異が大きい
  const noInnerText = await page.$eval('.rank', el => el.innerText)
  console.log(noInnerText)

  const noTextContent = await page.$eval('.rank', el => el.textContent);
  console.log(noTextContent)

  await browser.close()
})()
