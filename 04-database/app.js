// database example
// http://sequelizejs.com/articles/getting-started

var express = require('express');
var app = express();

var sqlze = require('sequelize');
var db = new sqlze('databasename', 'username', 'password',{
	dialect: 'mysql',
	port: 3306
});

//
db
	.authenticate()
	.complete(function(err){
		if(!!err) {
			console.log('Unable to connect to database: ', err);
		} else {
			console.log('Connection OK!');
		}
	});
//

app.get('/:id', function(req, res) {

	var id = req.params.id;
	// Raw query
	db.query('SELECT * FROM tablename WHERE id='+ id).success(function(rows){
		// no errors
		console.log(rows);
		res.json(rows);
		// res.json(JSON.stringify(rows));
	});

});

var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Listening in port %d', server.address().port);
});