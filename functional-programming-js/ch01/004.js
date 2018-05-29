

"use strict";
const R = require('ramda');
const _ = require('lodash');
const run = R.compose;

const printToConsole = str => {
    console.log(str);
    return str;
};
const toUpperCase = str => str.toUpperCase();
const echo = R.identity;

const printMessage = run(printToConsole, toUpperCase, echo);
console.log(printMessage('Hello World'));


console.log("===================");
//http://yohshiy.blog.fc2.com/blog-entry-308.html

// 逐次処理(forEach)
// 写像(map)
// フィルター(filter)
// 畳み込み、縮退(reduce)
// 並び替え(sortBy)

console.log("forEach========");
//1要素ずつ処理
_.forEach([3,2,9,6],
    function(elem) { console.log(elem);});

console.log("map========");
//配列に1個ずつ適応
_.map([3,2,9,6],
      function(elem) { console.log(elem*2);});

console.log("filter========");

var f = _.filter([3,2,9,6], elem => (elem % 2) == 1);
console.log(f);

console.log("filter2========");

var objs = [{'name': 'Tanaka', 'age': 35, 'enrolled': true},
            {'name': 'Yamada', 'age': 30, 'enrolled': false},
            {'name': 'Satou',  'age': 41, 'enrolled': true}];

//関数ではないものを渡すと matches, matchesProperty が使われる
console.log(_.filter(objs, {'age': 35, 'enrolled': true}));
console.log(_.filter(objs, ['age', 35]));
console.log(_.filter(objs, ['name', "Satou"]));

console.log("reduce========");
//畳み込み。合計の場合は１つの要素に、その後の要素を合算して行く。
// {3, 2, 9, 6}
// (3, 2) => 3 + 2 ↓
//                 (5, 9) => 5 + 9  ↓
//                                 (14, 6) => 14 + 6  ↓
//                                                    20
var src = [3,2,9,6];
console.log(_.reduce(src, (sum, elem) => sum + elem));                // 20
console.log(_.reduce(src, (max, elem) => (max < elem) ? elem : max)); // 9

console.log(_.reduce([3,2,9,6], (count, elem) => count+1, 0));        // 4

console.log("sortBy========");
var objs = [{'name': 'Tanaka', 'age': 35},
            {'name': 'Yamada', 'age': 30},
            {'name': 'Satou',  'age': 41}];

// age の値でソート
console.log(_.sortBy(objs, 'age'));

console.log(_.sortBy(objs, elem => elem.age * -1));


console.log("size========");
//要素数取得
console.log(_.size([3,2,9,6]));

console.log("find========");
//指定した条件に最初(最後)にマッチする要素の検索。
//filderは全部取れて findは初めのが取れる
console.log(_.find([3,2,9,6], elem => (elem % 2) == 1));
console.log(_.findLast([3,2,9,6], elem => (elem % 2) == 1));





