app.factory('lineService', ['$http', '$q', function($http, $q){
	'use strict';

	// service interface
	var service = {
		addActivity: addActivity,
		getActivities: getActivities
	};

	function addActivity(newActivity){
		console.log(newActivity);
	}

	function getActivities(){
		
	}

	return service;

}]);