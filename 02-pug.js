const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');

const host = '0.0.0.0';
const port = Number.parseInt(process.argv[2], 10) || 8080;
const template = process.argv[3];

app.set('view engine', 'pug');
app.set('views', template);

app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port, host, () => {
    console.log(`Listening to port ${port} on host ${host}`);
});
