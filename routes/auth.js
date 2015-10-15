'use strict';

var express = require('express');
var auth = express.Router();
var passport = require('./../config/passport.js');
var authConfig = require('./../config/authConfig.js');

// sign up API with local strategy : /local/user
// connect to the done(err, user, msg) in passport.js
auth.post('/local/user', passport.authenticate('local-signup', function(err, user, msg) {

    // TODO
    
}));

// login API with local stragtegy : /local/login with a costom callback
// connect to the done(err, user, info) in passport.js
auth.post('/local/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {

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

            // TODO : we can change the return user info
            res.send(user.local.email);
        });
    })(req, res, next);
});

auth.get('/loggedin', authConfig.ensureAuthenticated, function(req, res) {
    debugger;
    if (req.user) {
        res.status(200).send(true);
    } else {
        res.status(500).send('error:req.user is null');
    }
});

auth.post('/logout', authConfig.logout);

module.exports = auth;