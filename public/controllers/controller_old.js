
var restUrl = "localhost:8080/rest/v1";

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

	var refresh = function() {
	  $http.get('/caliente').success(function(response) {
	    console.log("I got the data I requested");
	    $scope.calientelist = response;
	    $scope.caliente = "";
	  });
	};
	
	refresh();


	$scope.addCaliente = function() {
	  	console.log("Sending POST request");
	  	console.log($scope.caliente);
	  	$http.post('/caliente', $scope.caliente).success(function(response) {
	  		console.log("POST was successful");
	    	console.log(response);
	    	refresh();
	  	});
	};

	$scope.edit = function(id) {
		console.log("Sending GET request");
	    console.log(id);
	  	$http.get('/caliente/' + id).success(function(response) {
	    	$scope.caliente = response;
	  	});
	};
 
	$scope.remove = function(id) {
	    console.log("Sending DELETE request");
	  	console.log(id);
	  	$http.delete('/caliente/'+id).success(function(response) {
	  		console.log("DELETE was successful");
	    	refresh();
	  	});	  

	};


	$scope.update = function() {
	    console.log("Sending PUT request");
	  	console.log($scope.caliente);
	  	$http.put('/caliente/'+ $scope.caliente._id, $scope.caliente).success(function(response) {
	  		console.log("PUT was successful");
	    	console.log(response);
	    	refresh();
	  	});	  

	};


}]);﻿
