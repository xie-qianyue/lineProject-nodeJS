'use strict';

app
  .factory('Auth', function Auth($location, $rootScope, Session, User, $cookies, $http) {
    
    $rootScope.currentUser = $cookies.get('user') || null;
    $cookies.remove('user');

    return {

      // login: function(provider, user, callback) {
      // without provider
      login: function(user, callback) {
        // angular.noop : A function that performs no operations. 
        // This function can be useful when writing code in the functional style.
        var cb = callback || angular.noop;
        // Session.save({
        //   provider: provider,
        //   email: user.email,
        //   password: user.password,
        //   rememberMe: user.rememberMe
        // }, function(user) {
        //   $rootScope.currentUser = user;
        //   return cb();
        // }, function(err) {
        //   return cb(err.data);
        // });
        $http.post('/auth/local/login', user)
          .success(function(data) {
              return cb();
          })
          .error(function(error) {
              msg = error.message;
              //error = error.error ? error.error : error;
              //$flash.show(error.message || error);
          });
      },

      logout: function(callback) {
        var cb = callback || angular.noop;
        Session.delete(function(res) {
            $rootScope.currentUser = null;
            return cb();
          },
          function(err) {
            return cb(err.data);
          });
      },

      createUser: function(userinfo, callback) {
        var cb = callback || angular.noop;
        User.save(userinfo,
          function(user) {
            $rootScope.currentUser = user;
            return cb();
          },
          function(err) {
            return cb(err.data);
          });
      },

      currentUser: function() {
        Session.get(function(user) {
          $rootScope.currentUser = user;
        });
      },

      changePassword: function(email, oldPassword, newPassword, callback) {
        var cb = callback || angular.noop;
        User.update({
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
            console.log('password changed');
            return cb();
        }, function(err) {
            return cb(err.data);
        });
      },

      removeUser: function(email, password, callback) {
        var cb = callback || angular.noop;
        User.delete({
          email: email,
          password: password
        }, function(user) {
            console.log(user + 'removed');
            return cb();
        }, function(err) {
            return cb(err.data);
        });
      }
    };
  })