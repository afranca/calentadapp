var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

	var refresh = function() {
	  $http.get('/contactlist').success(function(response) {
	    console.log("I got the data I requested");
	    $scope.contactlist = response;
	    $scope.contact = "";
	  });
	};
	
	refresh();


	$scope.addContact = function() {
	  	console.log("Sending POST request");
	  	console.log($scope.contact);
	  	$http.post('/contactlist', $scope.contact).success(function(response) {
	  		console.log("POST was successful");
	    	console.log(response);
	    	refresh();
	  	});
	};

	$scope.edit = function(id) {
		console.log("Sending GET request");
	    console.log(id);
	  	$http.get('/contactlist/' + id).success(function(response) {
	    	$scope.contact = response;
	  	});
	};
 
	$scope.remove = function(id) {
	    console.log("Sending DELETE request");
	  	console.log(id);
	  	$http.delete('/contactlist/'+id).success(function(response) {
	  		console.log("DELETE was successful");
	    	refresh();
	  	});	  

	};


	$scope.update = function() {
	    console.log("Sending PUT request");
	  	console.log($scope.contact);
	  	$http.put('/contactlist/'+ $scope.contact._id, $scope.contact).success(function(response) {
	  		console.log("PUT was successful");
	    	console.log(response);
	    	refresh();
	  	});	  

	};


}]);﻿
