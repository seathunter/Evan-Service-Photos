const express = require('express');
const app = express();
const port = 3050;
var db = require('../database');


const app = express();

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/photos', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports.app = app;