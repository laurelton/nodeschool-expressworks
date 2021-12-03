const express = require('express');
const app = express();

const port = Number.parseInt(process.argv[2], 10) || 8080;

app.get('/search', (req, res) => {
    const { query } = req;
    res.send(query);
});

app.listen(port);
