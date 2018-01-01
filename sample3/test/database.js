const db = require('../server/database')
const userid = 1
const passwd = ""
var token = ""
// db.addUser(userid, passwd, (token) => {
//     console.log(token);
// })
console.log("================");

db.getUser(userid, (user) => {
    // print(user);
    console.log(user.userid);
    console.log(user.token);
    token = user.token;
})

console.log("================");

const comment = "コメント１！"
const time = (new Date()).getTime()
const item = {userid, comment, time}
db.timelineDB.insert(item, (err, it) => {
  // if (err) {
  //   res.json({status: false, msg: 'DBエラー'})
  //   return
  // }
  // res.json({status: true, timelineid: it._id})
  console.log(it._id);
  console.log(it);
})

// db.getFriendsTimeline(userid, token, (err, docs) => {
// // if (err) {
// //   res.json({status: false, msg: err.toString()})
// //   return
// // }
// // res.json({status: true, timelines: docs})
//     console.log(err);
//     console.log(docs);
// })

console.log("================");

db.getTimeline((err, docs) => {
// if (err) {
//   res.json({status: false, msg: err.toString()})
//   return
// }
// res.json({status: true, timelines: docs})
    console.log(err);
    console.log(docs);
})

