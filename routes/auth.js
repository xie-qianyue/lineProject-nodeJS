'use strict';

var express = require('express');
var auth = express.Router();
var passport = require('./../config/passport.js');

// sign up API with local strategy : /local/user
// connect to the done(err, user, msg) in passport.js
auth.post('/local/user', passport.authenticate('local-signup', function(err, user, msg) {

}));

// login API with local stragtegy : /local/login
// connect to the done(err, user, info) in passport.js
// custom callback
auth.post('/local/login', function (req, res, next) {
  passport.authenticate('local-login', function (err, user, info) {
    
  	debugger;

    if (err) { 
    	return next(err); 
    }
    
    if (!user) { 
    	return res.status(401).send(info.loginMessage);
    }

    req.logIn(user, function(err) {
      if (err) { 
      	return next(err); 
      }
      return res.send(user.local.email);
    });
  })(req, res, next);
});

module.exports = auth;