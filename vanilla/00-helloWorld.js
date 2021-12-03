const http = require('http');
const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;

http.createServer((_, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(port);
