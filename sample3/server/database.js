const path = require('path')
const NeDB = require('nedb')

const userDB = new NeDB({
    filename: path.join(__dirname, 'user.db'),
    autoload: true
})

const timelineDB = new NeDB({
    filename: path.join(__dirname, 'timeline.db'),
    autoload: true
})

function getHash (pw) {
    const salt = '::EVuCMQwfI48jofa'
    const crypto = require('crypto')
    const hashnum = crypto.createHash('sha512')
    hashnum.update(pw + salt)
    return hashnum.digest('hex')
}

function getAuthToken (userid) {
    const time = (new Date()).getTime()
    return getHash(`${userid}:${time}`)
}

function getUser (userid, callback) {
    userDB.findOne({userid}, (err, user) => {
        if (err || user == null)
        callback(user)
    })
}

function addUser (userid, passwd, callback) {
    const hash = getHash(passwd)
    const token = getAuthToken(userid)
    const regDoc = {userid, hash, token, friends: {}}
    userDB.insert(regDoc, (err, newdoc) => {
        if (err) return callback(err, null)
        callback(null, token)
    })
}
