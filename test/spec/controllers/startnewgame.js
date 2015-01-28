'use strict';

describe('Controller: StartnewgameCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsMathGameApp'));

  var StartnewgameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartnewgameCtrl = $controller('StartnewgameCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
