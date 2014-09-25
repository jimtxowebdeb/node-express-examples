// google login example
// http://passportjs.org/guide/configure/
// https://github.com/jaredhanson/passport-google-oauth
// http://scotch.io/tutorials/javascript/easy-node-authentication-google

// TESTING!!!!

var express = require('express');
var app = express();

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: "598288931515-n6v2sg55gr3t71ds7jjs617o297405h5.apps.googleusercontent.com",
    clientSecret: "Y-W2nZblGM4KBopww0MFVGPk",
    callbackURL: "http://127.0.0.1:3000/auth/google/callback",
    // https://developers.google.com/+/api/oauth#login-scopes
    // scope: 'https://www.googleapis.com/auth/plus.login'
    scope: 'https://www.googleapis.com/auth/userinfo.email'
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    return done(null, profile.id);
  }
));

//????
app.get('/', passport.authenticate('google'), function(req, res) {
    res.send('login OK!');
});


app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});