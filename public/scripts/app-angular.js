var app = angular.module('lineApp', [
    'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $routeProvider.
        when('/about', {
            templateUrl: '/views/about.html'
        }).
        /*
        when('/localTodo', {
            templateUrl: '/views/todo.html',            
            controllerAs: 'todoCtrl',
            controller: 'todoController'
        }).*/    
        otherwise({
            templateUrl: '/views/main.html',
            controllerAs: 'lineCtrl',
            controller: 'lineController'
        });
  }]);