// form
// http://expressjs.com/4x/api.html#req.params
var express = require('express');
var app = express();

// GET /search?q=tobi+ferret
// curl http://localhost:3000/search?q=tobi+ferret
app.get('/search', function(req, res) {
    res.send('No result for ' + req.query.q);
});

// GET /user/<name>
// curl http://localhost:3000/user/<name>
app.get('/user/:name', function(req, res) {
    res.send('Hello ' + req.params.name);
});

// POST /user/
// curl --data "name=<name>" http://localhost:3000/user
app.post('/user/', function(req, res) {
    res.send('User ' + req.params('name') + ' added.');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});