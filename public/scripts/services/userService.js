'use strict';

app
  .factory('User', function ($resource) {
    return $resource('/auth/local/users/:id/', {},
      {
        'update': {
          method:'PUT'
        }
      });
  });