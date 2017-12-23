const db = require("./server/database")

const express = require("express")
const app = express()
const portNo = 3001
app.listen(portNo, ()=> {
    console.log("init!", `http://localhost:${portNo}`)
})

app.get('/api/get_friends_timeline', (req, res)=> {
    const userid = req.query.userid
    const token = req.query.token
    db.getFriendsTimeline(userid, token, (err, docs) => {
        if (err) {
            res.json({status: false, msg: err.toString()})
        }
        res.json({status: true, timeline: docs})
    })
})


// app.use('/public', express.static('./public'))
// app.use('/login', express.static('./public'))
// app.use('/users', express.static('./public'))
// app.use('/timeline', express.static('./public'))
app.use('/', express.static('./public'))
