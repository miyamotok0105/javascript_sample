
//ファイルのダウンロード
var client = require('cheerio-httpcli');

var url = "https://www.aozora.gr.jp/index_pages/person81.html"
var param = {};

// fetchでファイルダウンロードから解析までできる。
client.fetch(url, param, function (err, $, res){
    if (err) { console.log("Error:", err); return; }
    // err：エラー情報
    // $：取得したデータ
    // res：サーバーからのレスポンス情報
    var body = $.html();

    console.log(body);
});
