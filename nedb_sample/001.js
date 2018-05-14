
var Datastore = require('nedb')
, db = new Datastore();

db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
  });
db.find({ }, function (err, docs) {
    console.log(docs);
});

db.remove({}, { multi: true }, function (err, numRemoved) {
});