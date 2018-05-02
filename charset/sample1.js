
var jschardet = require('jschardet');
var notUtf8String = "4389789371907ofiajfoi";//どこかから持ってきたUTF-8じゃなさそうな文字列
var detectResult = jschardet.detect(notUtf8String);
console.log(detectResult);

var notUtf8String2 = "あいうえお順";//どこかから持ってきたUTF-8じゃなさそうな文字列
var detectResult2 = jschardet.detect(notUtf8String2);
console.log(detectResult2);


var Iconv = require('iconv').Iconv;
var iconv = new Iconv('ascii', 'UTF-8//TRANSLIT//IGNORE');
var convertedString = iconv.convert(notUtf8String).toString();
console.log(jschardet.detect(convertedString))


// var jschardet = require('jschardet');
// var Iconv = require('iconv').Iconv;
// var notUtf8String = "あいうえお順";
// //文字コード判定
// var detectResult = jschardet.detect(notUtf8String);

// //判定した文字コードからUTF-8に変換
// var iconv = new Iconv(detectResult.encoding,'UTF-8//TRANSLIT//IGNORE');
// var convertedString = iconv.convert(notUtf8String).toString();
// console.log(convertedString)
