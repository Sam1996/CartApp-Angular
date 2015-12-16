var app=angular.module('storeApp',['ngRoute','ngAnimate']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'partials/main.html',controller:'mainController'})
		.when('/home',{templateUrl:'partials/main.html',controller:'mainController'})
		.when('/store',{templateUrl:'partials/store.html',controller:'storeController'})
		.when('/cart',{templateUrl:'partials/cart.html',controller:'cartController'})
		.when('/details/:itemId',{templateUrl:'partials/details.html',controller:'detailsController'})
		.otherwise({redirectTo:'/error.html'});
}]);

app.controller('mainController', function($scope) {
		$scope.message = 'Look! I am a mainController page.';
	});
app.controller('storeController', function($scope) {
		$scope.message = 'Look! I am a storeController page.';
	});

app.controller('searchController',function($scope){
	$scope.productList=[
		{title:"Men's Full Sleeve",sku:"mensfullsleeve"},
		{title:"Men's Sleeve Less",sku:"menssleeveless"},
		{title:"Men's Hoodie",sku:"menshoodie"},
		{title:"Men's Round Neck",sku:"mensroundneck"},
		{title:"Men's V-neck",sku:"mensv-neck"},
		{title:"Men's Polo",sku:"menspolo"},
		{title:"Women's Full Sleeve",sku:"womensfullsleeve"},
		{title:"Women's Sleeve less",sku:"menssleeveless"},
		{title:"Women's Hoodie",sku:"menshoodie"},
		{title:"Women's Round Neck",sku:"mensroundneck"},
		{title:"Women's T-shirt",sku:"menst-shirt"}
	];
});

app.controller('ProductController',function($scope,$http){
	$http.get('product.json').success(function(data){
		$scope.ProductList=data;

	});
});

app.controller('detailsController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$http.get('product.json').success(function(data){
		$scope.ProductList=data;
		$scope.whichItem=$routeParams.itemId;
		$scope.sizefilterquery='small';
		$scope.colorfilterquery='white';
			$scope.naming=$scope.ProductList[$scope.whichItem].comment;
		$scope.qty=1;
		
	});
}]);

app.controller('cartController', function($scope) {
	
});

app.controller('reviewController',function($scope){
	$scope.reviews=[];
	$scope.review={};
	$scope.id=0;
	$scope.addReview=function(){
		$scope.id += 1;
		$scope.reviews.push({
			id:$scope.id,
			username:$scope.review.username,
			email:$scope.review.email,
			star:$scope.review.star,
			message:$scope.review.message
		});
		$scope.noOfReviews=$scope.reviews.length;
		$scope.review={};
	
	};
});
