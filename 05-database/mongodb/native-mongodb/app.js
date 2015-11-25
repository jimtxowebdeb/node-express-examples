var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var IP = process.env.IP;
var url = 'mongodb://' + IP + ':27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});