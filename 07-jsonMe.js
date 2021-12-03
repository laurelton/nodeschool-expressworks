const express = require('express');
const app = express();
const fs = require('fs');

const { argv } = process;
const host = '0.0.0.0';
const port = Number.parseInt(argv[2], 10) || 8080;
const filename = argv[3];

app.get('/books', (_, res) => {
    fs.readFile(filename, (err, data) => {
        if (err) {
            throw err;
        }

        const fileJSON = JSON.parse(data);
        res.json(fileJSON);
    });
});

app.listen(port, host);
