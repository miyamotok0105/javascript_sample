var request = require('request');
//yahooからhtmlを取得
//function(err, res, body) {で続く部分がおそらくコールバック関数
request.get('http://www.yahoo.co.jp', function(err, res, body) {
  if (err) {
    console.log('Error: ' + err.message);
    return;
  }
  console.log("body: "+body.slice(0,200));
  console.log("res: "+res);
});
