
//副作用のあるコード例。
//increment関数はグローバル関数のcounterを変更してしまう。
var counter = 0;
function increment() {
    return ++counter;
}
increment();
console.log(counter);
increment();
console.log(counter);


console.log("===================");

//このコードは副作用を伴う
const db = require('./helper').db;
function showStudent(ssn) {
    //findで学生を検索
    //関数スコープ外にあるelementid変数を読み込む
    let student = db.find(ssn);
    if (student !== null) {
        let studentInfo = `<p>${student.ssn},${student.firstname},${student.lastname}</p>`;
        return studentInfo;
    }
    else {
        throw new Error('Student not');
    }
}
var tag = showStudent('444-44-4444')
console.log(tag);


console.log("===================");

const db2 = require('./helper').db;
const R = require('ramda');
const run = R.compose;
const curry = R.curry;

//学生のレコードをとる処理から、画面に表示する処理を分離する。
//カリー化すると関数の引数のいくつかを部分的に設定し、
//関数のパラメータを１つまで減らせる。
//カリー化を適応することで、run関数によって合成できる単項関数に変換できる。


//dbからfindしてobjを返す
const find = curry((db2, id) => {
    let obj = db2.find(id);
    if (obj === null) {
        throw new Error('Object not found!');
    }
    return obj;
});

//studentをcsvに変換
const csv = student => `${student.ssn}, ${student.firstname}, ${student.lastname}`;


const append = curry((source, info) => {
    source(info);
    return info;
});

//runって入ってきた「444-44-4444」を関数に渡して行くイメージ。
//全部の2個目の引数に入れてく。
const showStudent2 = run(
    append(console.log),
    csv,
    find(db2)
);

showStudent2('444-44-4444');


console.log("===================");

