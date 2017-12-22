
//http://localhost:8081/
//node hello-server.js

const http = require("http")

const svr = http.createServer(handler)
svr.listen(8081)

function handler (req, res) {
    console.log("url:", req.url)
    console.log("method:", req.url)
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1>hello, world!</h1>\n")
}
