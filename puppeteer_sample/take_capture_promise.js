const puppeteer = require('puppeteer');

let browser, page;

Promise.resolve()
    .then(function(){
        return puppeteer.launch();
    })
    .then(function(b){
        browser = b;
        return browser.newPage();
    })
    .then(function(p){
        page = p;
        return page.goto('https://www.google.co.jp/');
    })
    .then(function(){
        return page.screenshot({path: 'google_promise.png'});
    })
    .then(function(){
        browser.close();
    })
    .catch(function(e){
        console.log(e);
        browser.close();
    });
