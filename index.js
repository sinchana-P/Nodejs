const http = require('http');

function dataControl (req, resp) {
    resp.write("<h1>Hello There Sinchana here!</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4700);

