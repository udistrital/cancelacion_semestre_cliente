'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  })
}])

.controller('HomeCtrl', [
  '$scope',
  '$http',
  '$httpParamSerializerJQLike',
  '$cookies',
  'CONFIG',
  function(
    $scope,
    $http,
    $httpParamSerializerJQLike,
    $cookies,
    CONFIG) {
    $scope.m = {}
    $scope.mFields = [{
      'type': 'input',
      'key': 'username',
      'templateOptions': {
        'label': 'Usuario',
        'required': true,
        'type': 'text'
      }
    }, {
      'type': 'input',
      'key': 'password',
      'templateOptions': {
        'label': 'Clave',
        'required': true,
        'type': 'password'
      }
    }];
    $scope.sendLogin = function() {
      var completeUrl = CONFIG.WS_URL + '/user/getToken'
      $http({
        url: completeUrl,
        method: 'POST',
        //paramSerializer: '$httpParamSerializerJQLike',
        data: $httpParamSerializerJQLike($scope.m),
        //data: 'username=' + $scope.m.username + '&password=' + $scope.m.password,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data, status, headers, config) {
        data = angular.fromJson(data)
        $cookies.put('token', data.tokenString)
      }).error(function(data, status, headers, config) {
        console.log(data)
        juu.showError(data)
        $scope.status = status
      });

    }
  }
])
