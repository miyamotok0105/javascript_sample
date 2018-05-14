

const path = require('path')

var Datastore = require('nedb')
, db = new Datastore({ filename: path.join(__dirname, 'bbs.db'), autoload: true });
db.loadDatabase(function (err) {    // Callback is optional
// Now commands will be executed
});

var doc = {}
doc.item1 = { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] };
doc.item2 = { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } };
doc.item3 = { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false };
doc.item4 = { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } };
doc.item5 = { _id: 'id5', completeData: { planets: [ { name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 } ] } };

db.insert(doc.item1, function (err, newDoc) {});
db.insert(doc.item2, function (err, newDoc) {});
db.insert(doc.item3, function (err, newDoc) {});
db.insert(doc.item4, function (err, newDoc) {});
db.insert(doc.item5, function (err, newDoc) {});


//system列でsolarのデータに絞る
db.find({ system: 'solar' }, function (err, docs) {
  console.log("=======================");
  console.log(docs);
});

//planet列でarを含むので絞る
db.find({ planet: /ar/ }, function (err, docs) {
  console.log("=======================");
  console.log(docs);
});

//２つで絞る
db.find({ system: 'solar', inhabited: true }, function (err, docs) {
  console.log("=======================");
  console.log(docs);
});

//planetsをMarsで絞る
db.find({ "completeData.planets.name": "Mars" }, function (err, docs) {
  console.log("=======================");
  console.log(docs);
});

//idで絞る
db.findOne({ _id: 'id1' }, function (err, doc) {
  console.log("=======================");
  console.log(doc);
});

console.log("=======================");


db.remove({}, { multi: true }, function (err, numRemoved) {
});







