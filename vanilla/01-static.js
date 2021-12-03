const http = require('http');
const fs = require('fs');
const path = require('path');
const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;
const dir = argv[3] || '.';
const file = path.join(dir, 'index.html');

http.createServer((_, res) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            throw err;
        }

        res.end(data);
    });
}).listen(port);
