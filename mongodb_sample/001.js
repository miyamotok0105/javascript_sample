const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert')

MongoClient.connect('mongodb://127.0.0.1:27017/myDB', (err, db) => {
    assert.equal(null, err)
    console.log("Connected successfully to server")
    db.close()
})

