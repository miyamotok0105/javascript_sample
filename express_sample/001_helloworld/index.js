//node index.js

//express読み込み
var express = require('express');
//app定義
var app = express();
//ルートパスにget作成
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//3000ポートで動かす。
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//２個lisenすれば２個とも動く。
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

