var firstApp = angular.module("firstApp",[]);
firstApp.controller("FirstController",function($scope){
	$scope.first='손';
	$scope.last='화정';
	$scope.head='메세지 : ';
	
	$scope.updateMessage = function(){
		$scope.message = "안녕하세요" + $scope.first + $scope.last;
	};
}
