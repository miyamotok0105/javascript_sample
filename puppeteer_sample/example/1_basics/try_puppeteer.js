//https://try-puppeteer.appspot.com/

//python -m http.server 8000

const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com/news');
    //ページコンテンツ(html)を表示
    console.log(await page.content());
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();

})()
