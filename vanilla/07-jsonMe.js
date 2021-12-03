/* eslint-disable no-new-func */
const fs = require('fs');
const http = require('http');
const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;
const jsonFile = argv[3];

http.createServer((req, res) => {
    const {url, method} = req;
    if (url.startsWith('/books') && method === 'GET'){
        fs.readFile(jsonFile, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const booksArr = Function(`return (${data})`)();
            const json = JSON.stringify(booksArr);
            res.end(json);
        });
    }
}).listen(port);
