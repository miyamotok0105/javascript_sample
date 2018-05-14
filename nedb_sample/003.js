
const path = require('path')

var Datastore = require('nedb')
, db = new Datastore({ filename: path.join(__dirname, 'bbs.db'), autoload: true });
db.loadDatabase(function (err) {    // Callback is optional
// Now commands will be executed
});

db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
});
db.find({ }, function (err, docs) {
  console.log(docs);
});

db.remove({}, { multi: true }, function (err, numRemoved) {
});
