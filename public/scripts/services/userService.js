'use strict';

app
  .factory('User', function ($resource) {
    return $resource('/auth/local/user/:id/', {},
      {
        'update': {
          method:'PUT'
        }
      });
  });