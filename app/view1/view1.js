'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.name = 'Suissa';

  var url = 'http://localhost:3000/api/beers';
  var method = 'GET';
  $http({
    url: url,
    method: method
  }).
  success(function(data){
    console.log('Data: ', data);
    $scope.beers = data;
  }).
  error(function(err){
    console.log('Erro: ', err);
  });
}])
.controller('UserController', ['$scope', '$http',
  function($scope, $http){

    $scope.mostraUser = false;

    // exemplo de função que irá rodar com um CLICK
    $scope.rodar = function(){
      $scope.mostraUser = !$scope.mostraUser;
    }

    var url = 'https://api.github.com/users/suissa';
    var method = 'GET';
    $http({
      url: url,
      method: method
    }).
    success(function(data){
      console.log('Data: ', data);
      $scope.user = data;
    }).
    error(function(err){
      console.log('Erro: ', err);
    });
  }
]);

