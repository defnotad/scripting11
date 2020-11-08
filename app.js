const express = require('express');
const body_parser = require('body-parser');

const app = express();

app.use(body_parser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});






app.listen(3000, function () {
    console.log('Server started on port 3000');
});