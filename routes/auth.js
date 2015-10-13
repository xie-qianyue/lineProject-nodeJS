'use strict';

var express = require('express');
var auth = express.Router();
var passport = require('./../config/passport.js');
var authConfig = require('./../config/authConfig.js');

// sign up API with local strategy : /local/user
// connect to the done(err, user, msg) in passport.js
auth.post('/local/user', passport.authenticate('local-signup', function(err, user, msg) {

}));

// login API with local stragtegy : /local/login
// connect to the done(err, user, info) in passport.js
// custom callback
auth.post('/local/login', function (req, res, next) {
  passport.authenticate('local-login', function (err, user, info) {
    
    if (err) { 
    	return next(err); 
    }
    
    if (!user) { 
    	return res.status(401).send(info.loginMessage);
    }

    // return res.send(user.id);
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      
      res.send(user.local.email);
    });
  })(req, res, next);
});

auth.get('/loggedin', authConfig.ensureAuthenticated, function (req, res) {
	debugger;
	if(req.user) {
		return true;
	} 
	return false;
});

auth.post('/logout', authConfig.logout);

module.exports = auth;