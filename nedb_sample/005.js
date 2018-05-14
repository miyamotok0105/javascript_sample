

const path = require('path')

var Datastore = require('nedb')
, db = new Datastore({ filename: path.join(__dirname, 'bbs.db'), autoload: true });
db.loadDatabase(function (err) {    // Callback is optional
// Now commands will be executed
});

var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

db.insert(doc, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});

db.find({ }, function (err, docs) {
  console.log(docs);
});

db.remove({}, { multi: true }, function (err, numRemoved) {
});



