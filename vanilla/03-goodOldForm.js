const http = require('http');
const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;

http.createServer(function(req, res) {
    if (req.url.startsWith('/form') && req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const keyPairs = body.split('&')
                .map(pair => pair.split('='))
                .reduce((obj, curr) => {
                    const [key, val] = curr;
                    obj[key] = val;

                    return obj;
                }, {});

            const str = decodeURIComponent(keyPairs.str);
            res.end(str.split('').reverse().join(''));
        });
    }
}).listen(port);
