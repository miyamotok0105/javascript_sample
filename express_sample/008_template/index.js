//node index.js
//npm install pug --save
//npm install jade --save
//npm install --save body-parser

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


//テンプレートは１個しか読み込めない？
app.set('view engine', 'jade');
// app.set('view engine', 'pug');

app.post('/', function(req, res) {
    console.log(req.body);
    res.render('index', { title: 'Express Sample Posted ver 0.0.1', word: req.body.word});
});

app.get('/index2', function (req, res) {
  res.render('index2', { message: 'Hello there index2!'});
});

app.post('/post2', function(req, res) {
    console.log(req.body);
    res.render('form1', { title: 'Express Sample Posted ver 0.0.1', word: req.body.word});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



