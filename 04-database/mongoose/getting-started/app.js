// http://mongoosejs.com/docs/index.html

// connection
var mongoose = require('mongoose');
var user = process.env.USER;
var password = process.env.PASSWORD;
mongoose.connect('mongodb://'+user+':'+password+'@ds033400.mongolab.com:33400/zmwebdev-test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log('connection OK!');
});

// schema
var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.save(function (err, silence) {
  if (err) return console.error(err);
  console.log(silence);
});