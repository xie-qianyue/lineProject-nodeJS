'use strict';

/**
 *  Route middleware to ensure user is authenticated.
 */
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
	debugger;
  if (req.isAuthenticated()) { 
  	return next(); 
  }
  res.send(401);
}

/**
 * Logout
 * returns nothing
 */
exports.logout = function (req, res) {
	debugger;
  if(req.isAuthenticated()) {
    req.logout();
    res.send(200);
  } else {
    res.send(400, "Not logged in");
  }
};
