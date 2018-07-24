
const querystring = require('querystring');
const axios = require('axios');
 
let numCount = 50;

function sleep(time) {
    const d1 = new Date();
    while (true) {
        const d2 = new Date();
        if (d2 - d1 > time) {
            return;
        }
    }
}

function* startIndexMaker() {
    var index = 0;
    yield 0;
    while(true) {
        index = index + numCount
        yield index;
    }
}

var gen = startIndexMaker();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2



function insert2mongo(event) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("events").insert(event, function(err, res) {
        if (err) throw err;
        console.log("1 event inserted");
        db.close();
      });
    });
}


function getConnpassEvent(numCount, startIndex, keyword) {
    // let events;
    console.log(numCount, startIndex, keyword);
    axios.get('https://connpass.com/api/v1/event', {
        params: {
          count: numCount,
          start: startIndex,
          keyword: keyword
          // keyword: "python"
        }
      })
      .then(response => {
        // console.log(response.data);
        // console.log(response.data.results_returned);
        // console.log(response.data.events);
        // let events = response.data.events;
        let events = response.data.events;
        // console.log(response.data.events.length);
        let numEvents = response.data.events.length;
        for (var i = 0; i < numEvents; i++) {
            console.log("=========");
            console.log(i);
            console.log(events[i].title);
            // console.log(events[i].started_at);
            insert2mongo(events[i]);
        }
      })
      .catch(error => {
        console.log(error);
      });
}

//APIをコールする。
for (let startIndex of gen) { 
    console.log(startIndex);
    getConnpassEvent(numCount, startIndex, "weeyble");
    var events = getConnpassEvent(numCount, startIndex, "weeyble");
    console.log(events);
    sleep(5000);
    if ( startIndex > 100 ) break;
}




