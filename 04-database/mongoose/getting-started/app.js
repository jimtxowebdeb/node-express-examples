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

// remove all documents
Kitten.remove({}, function (err) {
  if (err) return handleError(err);
  // removed!
});

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.save(function (err, silence) {
  if (err) return console.error(err);
  console.log('Silence created:');
  console.log(silence);
});


var black = new Kitten({ name: 'black' });
console.log(black.name); // 'Black'

black.save(function (err, black) {
  if (err) return console.error(err);
  console.log('Black created:');
  console.log(black);
});


function findAllKittens () {
    // find all
    Kitten.find({}, function (err, kittens) {
      if (err) return console.error(err);
      console.log('Find all kittens:');
      console.log(kittens);
    });
}

function findSilence () {
    // find one
    Kitten.find({ name: 'Silence' }, function (err, kittens) {
      if (err) return console.error(err);
      console.log('Find Silence:');
      console.log(kittens);
    });
}


setTimeout(findSilence, 2000);
setTimeout(findAllKittens, 5000);
