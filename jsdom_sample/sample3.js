
const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = "<html></html>"
const dom_html = new JSDOM(html);

const section = "<section></section>"
const dom_section = new JSDOM(section);


// const document = dom.window.document;
// const pEl = dom.window.document.querySelector("p")
// const pEl = document.querySelector("p");
// const textNode = pEl.firstChild;
// dom.window.document.appendChild(pEl);

console.log(dom_html.window.document);
console.log(dom_section.window.document);


// const bodyElements = document.getElementsByTagName("body");

// console.log(dom.window.document);
// console.log(dom.window.document.body.children);
