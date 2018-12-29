
//Mapのメソッド
//clear：key valueを消す
//delete：keyに関係したのを消す
//entries：key valueの配列
//forEach：1回だけcallbackを呼び出す
//get：keyに関連する値を返す
//keys：keysに関連する要素のイテレータブルを返す
//etc...


//辞書作成
var myMap = new Map();

var keyString = "文字列",
    keyObj = {},
    keyFunc = function() {};

//値を入れる
myMap.set(keyString, "'文字列' と関連付けられた値");
myMap.set(keyObj, "keyObj と関連付けられた値");
myMap.set(keyFunc, "keyFunc と関連付けられた値");

//１個ずつ値を取り出す。
console.log(myMap.get(keyString));    // "'文字列' と関連付けられた値"
console.log(myMap.get(keyObj));       // "keyObj と関連付けられた値"
console.log(myMap.get(keyFunc));      // "keyFunc と関連付けられた値"

//便利だ
myMap.set("key1", "v1");
myMap.set("key2", "v2");
console.log(myMap.get("key2"));
console.log(myMap.get("key1"));


//for..of
console.log("for..of======");
for (var [key, value] of myMap) {
    console.log(key + " = " + value);
}
console.log("for..of======");
for (var v of myMap.values()) {
    console.log(v);
}
console.log("for..of======");
for (var [k, v] of myMap.entries()) {
    console.log(k+" = "+v);
}

//forEach
console.log("forEach=======");
myMap.forEach(function(v, k) {
    console.log(k + " = " + v);
});

//Array
console.log("Array=====");
var kvArray = [["k1", "v1"], ["k2", "v2"]];
var myMap = new Map(kvArray);

console.log(myMap.get("k1"));

//辞書を２次元配列に変換
console.log(Array.from(myMap));

//辞書のkeysだけを配列に変換
console.log(Array.from(myMap.keys()));


