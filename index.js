const http = require('http')

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    resp.write(JSON.stringify({ name: 'sinchana', role: 'developer' }));
    resp.end()
}).listen(4700);
