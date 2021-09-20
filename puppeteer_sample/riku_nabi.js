const puppeteer = require('puppeteer');
const readline = require('readline');


//https://qiita.com/danodano/questions/9edbe870333cc86fd4c3
//エラーになる


const RIKUNAVI_TARGET_URL = 'https://job.rikunabi.com/2022/';
const RIKUNAVI_COMPANY_NAME_SELECTOR = '#mp_sp_input';
const RIKUNAVI_SEARCH_SELECTOR = '#mp_mv > div > div > div.mp_sp_01 > div > form > div.mp_clearfix.mp_mb13 > a';
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
function blockingWait(seconds) {
    //simple blocking technique (wait...)
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){}

}


function getFilename() {

    const offset = (new Date()).getTimezoneOffset() * 60000;
    const iso = (new Date(Date.now() - offset)).toISOString();
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
    return `${m[1]}${m[2]}${m[3]}-${m[4]}${m[5]}${m[6]}.png`;
}


(async () => {
    const browser = await puppeteer.launch({ 
        headless: false,
    });
    const page = await browser.newPage(); 
    await page.setViewport({ width: 1440, height: 900 }); 
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'ja'
    });

    await page.goto(RIKUNAVI_TARGET_URL);
    const answer = await prompt('企業名検索');
    await page.type(RIKUNAVI_COMPANY_NAME_SELECTOR, answer); 
    await Promise.all([ 
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click(RIKUNAVI_SEARCH_SELECTOR),
    ]);
    console.log("1")
    let RIKUNAVI_COMPANY_LINK = '//*[@id="cassette-r742110032"]/div[1]/div/a';
    await page.waitForXPath(RIKUNAVI_COMPANY_LINK);
    
    let elementHandleList = await page.$x(RIKUNAVI_COMPANY_LINK);
    await elementHandleList[0].click();
    //await sleep(100);
    await page.waitForTimeout(1500);
    pages = await browser.pages()
    for (const page of pages) {
	console.log(page.url())   // new page now appear!
	if ( page.url().indexOf('company') != -1) {
	    await page.bringToFront();
	    blockingWait(1);
	    console.log(page.url())
	    console.log("!!")
	}
    }
    //const [tab1, tab2, tab3] = (await browser.pages());
    //console.log(tab3)
    
    //await tab3.bringToFront();                                                                               
    await page.screenshot({path: 'debug1.png', fullPage:true})

    console.log("2")
    let COMPANY_NAME_LINK = '//h1[@class="ts-h-company-mainTitle"]/a'
    await page.waitForXPath(COMPANY_NAME_LINK);
    let elementCompaynNameList = await page.$x(COMPANY_NAME_LINK);
    COMPANY_NAME = elementCompaynNameList[0];
    console.log(COMPANY_NAME);
    await browser.close();
})();

const prompt = async (msg) => {
    console.log(msg);
    const answer = await question('> ');
    return answer.trim();
  };

  const question = (question) => {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise((resolve) => {
      readlineInterface.question(question, (answer) => {
        resolve(answer);
        readlineInterface.close();
      });
    });
  };
