const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  //ネットワークトラフィックを抽出する
  await page.tracing.start({path: 'trace.json', categories: ['devtools.timeline']})
  //ページにアクセス
  await page.goto('https://news.ycombinator.com/news')

  // execute standard javascript in the context of the page.
  //evalでページのコンテキストへアクセス
  //a -> storylink
  //page.$$evalでa.storylinkのクラスを確保しsnchorsって名前にする。
  //anchorsをテキスト部分を10個返却する。
  //<a href="http://l4linux.org/overview.shtml" class="storylink">L4Linux – Linux running on the L4 microkernel</a>
  const stories = await page.$$eval('a.storylink', anchors => { 
    return anchors.map(anchor => anchor.textContent).slice(0, 10) 
  })
  console.log(stories)
  await page.tracing.stop();
  await browser.close()
})()
