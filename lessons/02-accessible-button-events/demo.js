angular.module('demoApp', [])
.controller('demoController', function($scope) {
  $scope.doStuff = function($event){
  	alert('do stuff');
  };
});
