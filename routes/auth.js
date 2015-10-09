'use strict';

var express = require('express');
var auth = express.Router();
var passport = require('./../config/passport.js');

// sign up API with local strategy : /local/user
auth.post('/local/user', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/user', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

// login API with local stragtegy : /local/login
auth.post('/local/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


module.exports = auth;