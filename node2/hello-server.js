
//http://localhost:8081/
//node hello-server.js

const http = require("http")
const ctype = {"Content-Type": "text/html;charset=utf-8"}
const svr = http.createServer(handler)
svr.listen(8081)

function handler (req, res) {
    console.log("url:", req.url)
    console.log("method:", req.url)
    const url = req.url

    if (url == "/" || url === "/index.html") {
        showIndexPage(req, res)
        return
    }

    if (url.substr(0, 6) == "/dice/") {
        showDicePage(req, res)
        return
    }

    res.writeHead(404, ctype)
    res.end("404 not found")
}

function showIndexPage (req, res) {
    res.writeHead(200, ctype)
    const html = '<h1>show index page </h1>\n' + 
    '<p><a href="/dice/6">6</p> ' + 
    '<p><a href="/dice/12">12</p> '
    res.end(html)
}

function showDicePage (req, res) {
    res.writeHead(200, ctype)
    const a = req.url.split('/')
    const num = parseInt(a[2])
    const rnd = Math.floor(Math.random() + num) + 1
    console.log(rnd)
    res.end('<p>' + rnd + '</p>')
}

