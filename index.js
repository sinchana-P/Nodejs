const http = require('http');

http.createServer((req, resp) => {
    resp.write("<h1>Hello There Sinchana here!</h1>");
    resp.end();
}).listen(4700);

