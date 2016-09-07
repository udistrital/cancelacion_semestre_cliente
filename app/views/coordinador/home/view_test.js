'use strict';

describe('myApp.coordinadorHome module', function() {

  beforeEach(module('myApp.coordinadorHome'));

  describe('coordinadorHome controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var homeCtrl = $controller('CoordinadorHomeCtrl', {$scope: $scope});
      expect(homeCtrl).toBeDefined();
    }));

  });
});
