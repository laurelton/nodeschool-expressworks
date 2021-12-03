const http = require('http');
const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;

http.createServer((req, res) => {
    if (req.url.startsWith('/search') && req.method === 'GET') {
        const queryString = req.url.split('?')[1];
        const keyPairs = queryString.split('&');
        const jsonObj = keyPairs.reduce((obj, pair) => {
            const [key, val] = pair.split('=');
            obj[key] = val;

            return obj;
        }, {});

        res.end(JSON.stringify(jsonObj));
    }
}).listen(port);
