var express = require('express');
var app = express();

// session
// app.use(require('cookie-parser')('sdfsdf2323'));

// https://github.com/expressjs/session
var session = require('express-session');
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));

// app.use(require('express-session')());

// http://localhost:3000/?name=xxxxx
app.get('/name/:name', function(req, res) {

	var name = req.params.name;
	req.session.name = name;
	// req.session.save();
	
	console.log(req.session.name);
    res.send('Hello ' + name);
});

// http://localhost:3000/hello
app.get('/hello', function(req, res) {
	console.log(req.session.name);
    res.send('Hello ' + req.session.name);
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});