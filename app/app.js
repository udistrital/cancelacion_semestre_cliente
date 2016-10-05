'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myApp.home',
    'myApp.view2',
    'myApp.estudianteHome',
    'myApp.estudianteVer',
    'myApp.cancelar',
    'myApp.retiro',
    'myApp.aplazamiento',
    'myApp.consejoFacultadHome',
    'myApp.consejoFacultadVerYAprobar',
    'myApp.coordinadorHome',
    'myApp.coordinadorVerYAprobar',
    'myApp.vicerrectorAcademicoHome',
    'myApp.vicerrectorAcademicoCancelarSemAnterior',
    'myApp.vicerrectorAcademicoRegistrarFechas',
    'myApp.version',
    'ui.bootstrap',
    'formly',
    'formlyBootstrap'
  ])
  .constant('CONFIG', {
    WS_URL: 'v1',
  })
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }]);
