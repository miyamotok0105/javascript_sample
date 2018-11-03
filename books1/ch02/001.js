var url = "https://kujirahand.com/wiki/";
var savepath = "kujira.html";

// httpsプロトコルを扱う
var https = require('https');
// fsはファイル操作
var fs = require("fs");

//node jsは基本非同期で書かれてる。
//node jsでは時間のかかる処理を非同期で行うスタイル。
//その場で処理を待つのではなく、処理が完了した際にコールバック関数で通知する。

// ファイルパスを指定する
var outfile = fs.createWriteStream(savepath);

// getでアクセスする。
//getの戻り値はリクエストに関する機能を持つhttp.ClientRequestのインスタンス。
https.get(url, function(res) {
    res.pipe(outfile);
    //ダウンロードが終わったらここのコールバック関数が実行される。
    res.on("end", function(){
        outfile.close();
        console.log("ok");
    });
});