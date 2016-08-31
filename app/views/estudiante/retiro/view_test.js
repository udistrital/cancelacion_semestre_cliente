'use strict';

describe('myApp.retiro module', function() {

  beforeEach(module('myApp.retiro'));

  describe('retiro controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var retiroCtrl = $controller('RetiroCtrl', {$scope: $scope});
      expect(retiroCtrl).toBeDefined();
    }));

  });
});
