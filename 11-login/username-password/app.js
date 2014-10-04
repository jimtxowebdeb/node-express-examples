// var flash = require('connect-flash');

var express = require('express');
var app = express();

var session = require('express-session');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(session({ secret: 'dasjdhuueneud8jndsuswhjndh',
                  saveUninitialized: true,
                  resave: true }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// public files
app.use(express.static(__dirname + '/public'));


passport.use(new LocalStrategy(
  function(username, password, done) {
    // User.findOne({ username: username }, function(err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
    console.log(username);
    console.log(password);
    return done(null, username);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.get('/', function(req,res) {
  res.redirect('index.html');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});