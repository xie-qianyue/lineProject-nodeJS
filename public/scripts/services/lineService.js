app.factory('lineService', ['$http', '$q', function($http, $q) {
    'use strict';

    // service interface
    var service = {
        addActivity: addActivity,
        getActivities: getActivities
    };

    function addActivity(newActivity) {
        console.log(newActivity);

        var def = $q.defer();

        $http.post('/api/addActivity', newActivity)
            .success(function(data){
                def.resolve(data);
            })
            .error(function(err){
                // TODO
                console.log('Error : ' + err);
                def.reject('Failed to add activity');
            });

        return def.promise;
    }

    function getActivities() {

    }

    return service;

}]);