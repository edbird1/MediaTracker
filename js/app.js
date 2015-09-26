var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){
	$scope.list = []

});

var list = [
	{
		Name: "21", 
		Media Type: "Blu-Ray", 
		Genre: "Drama", 
		Year: 2008, 
		Length (min): 123, 
		MPR (MPAA): "PG-13", 
		CheckOut: false;
	}, 
	{
		Name: "Baby Mama", 
		Media Type: "DVD", 
		Genre: "Comedy", 
		Year: 2008, 
		Length (min): 99, 
		MPR (MPAA): "PG-13", 
		CheckOut: false;
	}
]
