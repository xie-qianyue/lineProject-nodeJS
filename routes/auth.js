'use strict';

var express = require('express');
var auth = express.Router();
var passport = require('./../config/passport.js');

// user api
auth.post('/local/users', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


module.exports = auth;