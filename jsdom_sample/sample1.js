

// node sample1.js > sample.html
// urlにアクセスしてhtmlを取得する。


//>httpsをrequireすれば簡単にHTMLを取得できる。
//らしい。素晴らしい。

const https = require('https');
const url = 'https://iwb.jp/foo/';
 

https.get(url, res => {
  let html = '';
  res.on('data', line => html += line);
  res.on('end', () => {
    console.log(html);
  });
});
