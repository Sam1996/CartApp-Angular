//http://plnkr.co/edit/nPbKqa13wfF5X119Cnpg

var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
	$scope.items=[{
		text:"n",
		number:34
	}];
	$scope.message=$scope.items.length;
	$scope.add=function(){
		$scope.items.push({
			text:$scope.text,
			number:$scope.number
		});
	};
});