'use strict';

describe('myApp.estudianteHome module', function() {

  beforeEach(module('myApp.estudianteHome'));

  describe('estudianteHome controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var homeCtrl = $controller('EstudianteHomeCtrl', {$scope: $scope});
      expect(homeCtrl).toBeDefined();
    }));

  });
});
