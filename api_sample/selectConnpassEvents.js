

let events;


function select2mongo() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("events").find({}).toArray(function(err, result) {
          if (err) throw err;
          // console.log(result);
          // events = result;
          db.close();
          return result;
      });
    }); 
}

events = select2mongo();

console.log(events);