const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { argv } = process;

const port = Number.parseInt(argv[2], 10) || 8080;
const host = '0.0.0.0';

app.use(bodyParser.urlencoded({extended: false}));
app.post('/form', (req, res) => {
    const reversed = req.body.str
        .split('')
        .reverse()
        .join('');
    res.end(reversed);
});

app.listen(port, host);
