//https://github.com/1lobby/mailgun-js

var express = require('express');
var app = express();


// email info
var api_key = process.env.API_KEY;
var domain = 'sandbox50fe0666ff6148d3a1a7fb040cb07ea5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


// POST /sendmail
// curl --data "to=<email>, ..." http://localhost:3000/sendmail
app.post('/sendmail', function(req, res) {

	var data = {
		from: 'zmwebdev@gmail.com',
		to: 'zmwebdev@gmail.com',
		subject: 'Hello',
		text: 'Testing some Mailgun awesomness!'
	};

	mailgun.messages().send(data, function (error, body) {
		if (error) {
			res.json(error);
		} else {
			console.log(body);
			res.json(body);
		}
	});

});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});