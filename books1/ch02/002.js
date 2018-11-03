
print(java.lang.System.getProperty("os.name"));

//==============================
//ファイル保存
//==============================
function saveText(fname, text, encoding) {
  var osw = new java.io.OutputStreamWriter(
    new java.io.FileOutputStream(fname),
    encoding);
  osw.write(text, 0, text.length);
  osw.close();
}
saveText("hoge.txt", "Hello world", "UTF-8");
//==============================

//一旦ここは諦める
// var url = "https://kujirahand.com/wiki/";
// var savepath = "kujira.html";

// var aUrl = new java.net.URL(url);
// var conn = aUrl.openConnection();
// var ins = conn.getInputStream();
// // var file = new java.io.File(savepath);
// // var out = new java.io.FileOutputStream(file);
// var osw = new java.io.OutputStreamWriter(
//     new java.io.FileOutputStream(savepath),
//     "UTF-8");

// var b;
// while ((b == ins.read()) != -1) {
//     osw.write(b, 0, b.length);
// }

// // out.close();
// osw.close();
// ins.close();
//==============================
