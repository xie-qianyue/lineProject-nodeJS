'use strict';

app
    .factory('User', function($resource) {
        return $resource('/auth/local/user/:id/', null, {
            'update': {
                method: 'PUT'
            }
        });
    });