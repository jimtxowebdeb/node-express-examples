// database example
// http://sequelizejs.com/articles/getting-started

var express = require('express');
var app = express();

var sqlze = require('sequelize');
var db = new sqlze('databasename', 'username', 'password',{
	dialect: 'mysql',
	port: 3306
});

app.get('/:id', function(req, res) {
    res.json({ id: 'xxxxx', name: 'yyyyyy' });
});

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});