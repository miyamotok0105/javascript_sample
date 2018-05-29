//https://qiita.com/mdmss37/items/67fbe6d3b6e5b76544d8
//カーリー化とは
//複数の引数と取る関数 → 引数が：元の関数の引数１で、戻り値が：元の関数の残りの引数を取り結果を返す関数にすること。

"use strict";
const R = require('ramda');
const _ = require('lodash');
const run = R.compose;
const curry = R.curry;

// returns function to takes len and obj
const hasLength = curry((len, obj) => {
  return (obj.length >= len)
})

const arr = [
  'first item',
  'another',
  'an item longer than other items.......'
]
//配列の長さを確認する関数
console.log(hasLength(15, arr[0]));
console.log(hasLength(15, arr[2]));

//lenが15以上のをフィルター
// hasLength(15) is a function to take obj and check length
const arr2 = arr.filter(hasLength(15))
// arr2 = ['an item longer than other items.......']
console.log(arr2);
console.log("===================");

//関数をさらに作る
const isFifteenCharsLong = hasLength(15)
const arr3 = arr.filter(isFifteenCharsLong)
console.log(arr3);
console.log("===================");
