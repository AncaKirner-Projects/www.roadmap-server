var http = require('http');

function onRequest(req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World2');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
}

const server = http.createServer(onRequest);

server.listen(8000);

console.log('Listening ...');

