
//命令型、手続き型
var array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < array.length; i++) {
    //２乗
    array[i] = Math.pow(array[i], 2);
}
console.log(array);

//関数型
//ループ処理をmapに任せる。
//ループ処理を書かない方がバグが減る。
//コードは書かないにこしたことはない。

array2 = [1,2,3,4,5,6,7,8,9].map(
    function(num) {
        //powした値をmapに返す
        return Math.pow(num, 2);
    }
);
console.log(array2);

//ES6以降ではラムダ式（アロー関数）が使える。
array3 = [1,2,3,4,5,6,7,8,9].map(num => Math.pow(num, 2));
console.log(array3);

