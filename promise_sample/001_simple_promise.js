// //Promiseを使わない非同期を繋げる場合
// A(function(a){
//   B(a, function(b){
//     C(b, function(c){
//       done(c); // ABC
//     });
//   });
// });

// //Promiseを使った場合
// A().then(B).then(C).then(done);  // ABC

var lists = [1,2,3]

function readLists(lists) {
  return new Promise(function(){
    for (  var i = 0;  i < lists.length;  i++  ) {
        console.log ( lists[i] );
    }
  });
}

function A() {
    console.log("A!");
    for (  var i = 0;  i < lists.length;  i++  ) {
        console.log ( lists[i] );
    }
}

function B() {
    console.log("B!");
    for (  var i = 0;  i < lists.length;  i++  ) {
        console.log ( lists[i] );
    }
}

function onRejected(error) {
  console.log("error = " + error);
}

//これはthen Aとかは動かないよ
readLists(lists)
    .then(A)
    .then(B)
    .then(console.log("end!"));

//これはオッケー
//非同期処理の成功時(resolve)、失敗時(reject)
var promise = Promise.resolve();
promise
  .then(A)
  .then(B)
  .catch(onRejected);





