const http = require('http');
const crypto = require('crypto');
const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;

http.createServer(function(req, res) {
    if (req.url.startsWith('/message') && req.method === 'PUT') {
        const arr = req.url.split('/');
        const id = arr[arr.length - 1];

        const hash = crypto
            .createHash('sha1')
            .update(new Date().toDateString() + id)
            .digest('hex');
        res.end(hash);
    }
}).listen(port);
