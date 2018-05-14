
const path = require('path')
var Datastore = require('nedb')

db = {};
db.bbs1 = new Datastore(path.join(__dirname, 'bbs1.db'));
db.bbs2 = new Datastore(path.join(__dirname, 'bbs2.db'));
//ロード中に実行されたコマンドはバッファされて遅延実行
db.bbs1.loadDatabase();
db.bbs2.loadDatabase();


db.bbs1.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
});


db.bbs1.find({ }, function (err, docs) {
  console.log(docs);
});
