var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});