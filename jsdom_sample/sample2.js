
const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const url = 'https://iwb.jp/foo/';
 
https.get(url, res => {
  let html = '';
  // htmlに対してlineを溜め込む！！
  res.on('data', line => html += line);
  res.on('end', () => {
    // 溜め込まれたhtmlをJSDOMで扱えるようにする。
    const dom = new JSDOM(html);
    // JSDOMからwindow.document.querySelectorでセレクタ指定した値にアクセスしてる。
    // スクレイピング系に使用できるが、js実行後ののを操作する場合はpuppterとか使ってね。ってさ
    console.log(dom.window.document.querySelector('#item > li:last-child').textContent);
    // => list3
  });
});
