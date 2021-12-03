const express = require('express');
const app = express();
const crypto = require('crypto');

const port = Number.parseInt(process.argv[2], 10);

app.put('/message/:id', (req, res) => {
    const { id } = req.params;
    const date = new Date().toDateString();
    const hash = crypto
        .createHash('sha1')
        .update(date + id)
        .digest('hex');

    res.end(hash);
});

app.listen(port);
