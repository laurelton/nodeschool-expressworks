/* eslint-disable semi */
const express = require('express');
const app = express();

const host = '0.0.0.0';
const port = Number.parseInt(process.argv[2], 10);

console.log(`${host}, ${port}`);
app.get('/home', (req, res) => {
    res.end('Hello World!');
});

app.listen(port, host, () => {
    console.log('Listening...');
});
