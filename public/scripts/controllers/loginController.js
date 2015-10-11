'use strict';

app.controller('loginCtrl', function ($scope, Auth, $location) {
  $scope.error = {};
  $scope.user = {};

  $scope.login = function() {
    // without provider
    Auth.login({  
      'email': $scope.user.email,
      'password': $scope.user.password
    });
  };
});