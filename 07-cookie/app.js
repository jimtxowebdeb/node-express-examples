var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

// http://localhost:3000/setcookie
app.get('/setcookie', function(req, res) {
    res.send('Cookie created');
});

// http://localhost:3000/readcookie
app.get('/readcookie', function(req, res) {
    res.send();
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});