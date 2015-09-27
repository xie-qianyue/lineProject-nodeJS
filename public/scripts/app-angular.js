var app = angular.module('lineApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'http-auth-interceptor'
    ]);

app
    .config(['$routeProvider', '$locationProvider',
      function ($routeProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $routeProvider
        .when('/', {
            templateUrl: '/views/main.html',
            controllerAs: 'lineCtrl',
            controller: 'lineController'
        })
        .when('/about', {
            templateUrl: '/views/about.html'
        })
        /*
        .when('/localTodo', {
            templateUrl: '/views/todo.html',            
            controllerAs: 'todoCtrl',
            controller: 'todoController'
        })*/
        .when('/login', {
            templateUrl: '/views/login.html',
            controller: 'loginCtrl'
        })
        .when('/signup', {
            templateUrl: '/views/signup.html',
            controller: 'signupCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });            
    }])
    .run(function ($rootScope, $location, Auth) {
        //watching the value of the currentUser variable.
        $rootScope.$watch('currentUser', function(currentUser) {
          // if no currentUser and a page which requires authorization is trying to update
          // will trigger 401s if user does not have a valid session
          if (!currentUser && (['/', '/login', '/logout', '/signup'].indexOf($location.path()) == -1 )) {
            Auth.currentUser();
          }
        });

        // On catching 401 errors, redirect to the login page.
        $rootScope.$on('event:auth-loginRequired', function() {
          $location.path('/login');
          return false;
        });
    });