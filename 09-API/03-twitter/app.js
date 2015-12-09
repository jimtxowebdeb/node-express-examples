// var Twitter = require('twitter');
var request = require('request');

//process.env.consumer_key
/*var client = new Twitter({
  consumer_key: 'PI0EycSZ1xHSSMU28Te4ms9Av',
  consumer_secret: 'OxVeNatbuHnhhZOImvNaaAX2kubd6CuLONPjVpxB3Dw9a0ddRA',
  access_token_key: '2831893158-R0twtBdh0il4MVX9YtrP7mbynat88pGaZ8E7cZG',
  access_token_secret: 'B9FDwBeGw5PfGCTDF3dapjMYYwE7IIAr1SJMll82WaJLj'
});
*/
/*
va+r params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
*/

var mqttserver = "http://mqtt-zmwebdev.rhcloud.com";

function bidali(url) {
      request({url:url}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("Argia piztu agindua bidalia");
        } else {
          console.log(error);
        }
      });
}

bidali(mqttserver + "/argia/itzaldu");

