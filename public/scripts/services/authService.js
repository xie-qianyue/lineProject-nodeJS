'use strict';

app
    .factory('Auth', function Auth($location, $rootScope, User, $http, $cookies) {

        $rootScope.currentUser = null;

        return {
            login: function(user) {
                $http.post('/auth/local/login', user)
                    .success(function(data) {
                        $rootScope.message = 'Authentication successful!';
                        $cookies.put('currentUser', data);
                        $rootScope.currentUser = data;
                        $location.url('/');
                    })
                    .error(function(error) {
                        $rootScope.message = error;
                        $location.url('/login');
                    });
            },

            logout: function() {
                $http.post('/auth/logout')
                    .success(function(data) {
                        $rootScope.message = 'Logout successful!';
                        $cookies.remove('currentUser');
                        $rootScope.currentUser = null;
                    })
                    .error(function(error) {
                        // TODO
                    })
            },

            createUser: function(userinfo) {
                User.save(userinfo,
                    function(user) {
                        $rootScope.currentUser = user;
                        return cb();
                    },
                    function(err) {
                        return cb(err.data);
                    });
            },

            checkLoggedin: function() {
                $http.get('/auth/loggedin')
                    .success(function(loggedin) {
                        if (loggedin) {
                            // if logged in, save currentUser
                            $rootScope.currentUser = $cookies.get('currentUser');
                        } else {
                            $rootScope.currentUser = null;
                        }

                    })
                    .error(function(error) {
                        // TODO
                        console.log(error);
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