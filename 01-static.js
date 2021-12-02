const path = require('path');
const express = require('express');
const app = express();
const {argv} = process;

const host = '0.0.0.0';
const port = Number.parseInt(argv[2], 10) || 8080;
const publicFolder = argv[3] || path.join(__dirname, 'public');

app.use(express.static(publicFolder));

app.listen(port, host, () => {
    // console.log('Listening...');
});
