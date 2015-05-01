'use strict';

angular.module('myApp.Beer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/beers', {
    templateUrl: 'modules/beer/views/list.html',
    controller: 'BeerListController'
  });
}])

.controller('BeerListController', ['$scope', '$http', function($scope, $http) {

  var url = 'http://localhost:3000/api/beers'
    , method = 'GET'
    ;

  $scope.title = 'Listagem das cervejas';
  $scope.reverse = false;
  $scope.predicate = 'name';

  $scope.ordenar = function(predicate) {
    $scope.predicate = predicate;
    $scope.reverse = !$scope.reverse
  }

  $http({
    url: url,
    method: method
  })
  .success(function(data){
    console.log('Data: ', data);
    $scope.beers = data;
    $scope.msg = 'Listagem completa.';
  })
  .error(function(err){
    console.log('Erro: ', err);
    $scope.msg = 'ERROOOOOO na listagem.';
  });
}]);

