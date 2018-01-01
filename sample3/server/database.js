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
  const salt = '::EVuCM0QwfI48Krpr'
  const crypto = require('crypto')
  const hashsum = crypto.createHash('sha512')
  hashsum.update(pw + salt)
  return hashsum.digest('hex')
}

function getAuthToken (userid) {
  const time = (new Date()).getTime()
  return getHash(`${userid}:${time}`)
}

function getUser (userid, callback) {
  userDB.findOne({userid}, (err, user) => {
    if (err || user === null) return callback(null)
    callback(user)
  })
}

function addUser (userid, passwd, callback) {
  const hash = getHash(passwd)
  const token = getAuthToken(userid)
  const regDoc = {userid, hash, token, friends: {}}
  userDB.insert(regDoc, (err, newdoc) => {
    if (err) return callback(null)
    callback(token)
  })
}

function login (userid, passwd, callback) {
  const hash = getHash(passwd)
  const token = getAuthToken(userid)
  getUser(userid, (user) => {
    if (!user || user.hash !== hash) {
      return callback(new Error('認証エラー'), null)
    }
    user.token = token
    updateUser(user, (err) => {
      if (err) return callback(err, null)
      callback(null, token)
    })
  })
}

function checkToken (userid, token, callback) {
  getUser(userid, (user) => {
    if (!user || user.token !== token) {
      return callback(new Error('認証に失敗'), null)
    }
    callback(null, user)
  })
}

function updateUser (user, callback) {
  userDB.update({userid: user.userid}, user, {}, (err, n) => {
    if (err) return callback(err, null)
    callback(null)
  })
}

function getFriendsTimeline (userid, token, callback) {
  checkToken(userid, token, (err, user) => {
    if (err) return callback(new Error('認証に失敗'), null)
    const friends = []
    for (const f in user.friends) friends.push(f)
    friends.push(userid) // 友達＋自分のタイムラインを表示
    timelineDB
      .find({userid: {$in: friends}})
      .sort({time: -1})
      .limit(20)
      .exec((err, docs) => {
        if (err) {
          callback(new Error('DBエラー'), null)
          return
        }
        callback(null, docs)
      })
  })
}

function getTimeline (callback) {
    timelineDB
      .find()
      .sort({time: -1})
      .limit(20)
      .exec((err, docs) => {
        if (err) {
          callback(new Error('DBエラー'), null)
          return
        }
        callback(null, docs)
      })
}

module.exports = {
  userDB, timelineDB, getUser, addUser, login, checkToken, updateUser, getFriendsTimeline, getTimeline
}
