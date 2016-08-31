'use strict';

describe('myApp.estudianteVer module', function() {

  beforeEach(module('myApp.estudianteVer'));

  describe('estudianteVer controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var homeCtrl = $controller('EstudianteVerCtrl', {$scope: $scope});
      expect(homeCtrl).toBeDefined();
    }));

  });
});
