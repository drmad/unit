import http from "http"

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Length': 12, 'Content-Type': 'text/plain'})
       .end('Hello World\n');
}).listen(7080);