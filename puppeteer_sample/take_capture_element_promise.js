const puppeteer = require('puppeteer');

let browser, page;
let path = 'style9.png';
let selector = "#hplogo";
let padding = 2;
// const padding = 'padding' in opts ? opts.padding : 0;
// const path = 'path' in opts ? opts.path : null;
// const selector = opts.selector;




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
        page.setViewport({width: 1000, height: 600, deviceScaleFactor: 1});
        return page.goto('https://www.google.co.jp/');
    })
    //============================
    .then(function(){
        if (!selector)
            throw Error('Please provide a selector.');
    })
    .then(function(){
        console.log(selector);
        const element = document.querySelector(selector);
        if (!element)
            return null;
        const {x, y, width, height} = element.getBoundingClientRect();
        return {left: x, top: y, width, height, id: element.id};
    })
    .then(function(dict){
        return  page.evaluate(selector => {
                    dict
                }, selector);
    })
    .then(function(rect){
        if (!rect)
            throw Error(`Could not find element that matches selector: ${selector}.`);
        return rect;
    })
    .then(function(rect){
        return page.screenshot({
            path,
            clip: {
                x: rect.left - padding,
                y: rect.top - padding,
                width: rect.width + padding * 2,
                height: rect.height + padding * 2
            }
        })
    })
    //============================
    .then(function(){
        return page.screenshot({path: 'google_logo.png'});
    })
    .then(function(){
        browser.close();
    })
    .catch(function(e){
        console.log(e);
        browser.close();
    });

