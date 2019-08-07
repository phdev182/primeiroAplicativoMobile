const express = require('express')

const server = express();

server.get('/', function (req, res) {
    return res.send(`Hello ${req.query.name}`);
});

server.listen(3333);