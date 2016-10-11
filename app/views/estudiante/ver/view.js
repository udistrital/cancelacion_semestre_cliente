'use strict';

angular.module('myApp.estudianteVer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/ver', {
    templateUrl: 'views/estudiante/ver/view.html',
    controller: 'EstudianteVerCtrl',
    resolve: {
      resolvedCancelacionSemestre: ['CancelacionSemestreFactory', function(CancelacionSemestreFactory) {
        return CancelacionSemestreFactory.query()
      }]
    }
  });
}])

.controller('EstudianteVerCtrl', [
  '$scope',
  'resolvedCancelacionSemestre',
  function(
    $scope,
    resolvedCancelacionSemestre
  ) {
    $scope.m = {}
    console.log(resolvedCancelacionSemestre);
    window.a = resolvedCancelacionSemestre
    $scope.m = resolvedCancelacionSemestre
  }
])

.factory('CancelacionSemestreFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/cancelacion_semestre/:id');
}])
