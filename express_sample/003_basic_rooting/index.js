//node index.js

var express = require('express');
var app = express();

//この形式。
//app.METHOD(PATH, HANDLER)
//PATHがサーバー上のパス
//HANDLERがhttp要求メソッド

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//postパスにpostできる
app.post('/post', function (req, res) {
  res.send('Got a POST request');
});

//userパスにputできる
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

//userパスにdeleteできる
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


