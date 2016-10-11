'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
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
    'formlyBootstrap',
  ])
  .constant('CONFIG', {
    WS_URL: 'v1',
  })
  .factory('CancelacionSemestreFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
    return $resource(CONFIG.WS_URL + '/cancelacion_semestre/:id')
  }])
  .factory('TipoCancelacionFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
    return $resource(CONFIG.WS_URL + '/tipo_cancelacion_semestre/:id')
  }])
  .factory('EstadoCancelacionFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
    return $resource(CONFIG.WS_URL + '/estado_cancelacion_semestre/:id')
  }])
  .config(['$locationProvider', '$routeProvider', '$resourceProvider', function($locationProvider, $routeProvider, $resourceProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/home'
    })

    $resourceProvider.defaults.actions = {
      'query': {
        method: 'GET',
        isArray: true,
        interceptor: {
          responseError: function(response) {
            console.log(response)
            window.alert(response.data)
          }
        }
      },
      'save': { //stackoverflow.com/questions/20584367/how-to-handle-resource-service-errors-in-angularjs
        method: 'POST',
        interceptor: {
          responseError: function(response) {
            console.log(response)
            window.alert(response.data)
          }
        }
      },
      'get': {
        method: 'GET',
        interceptor: {
          responseError: function(response) {
            console.log('actionGet', response)
            window.alert(response.data)
          }
        }
      },
      'update': {
        method: 'PUT',
        interceptor: {
          responseError: function(response) {
            console.log(response)
            window.alert(response.data)
          }
        }
      }
    }

  }])

//Please see https://www.consolelog.io/angularjs-change-path-without-reloading
