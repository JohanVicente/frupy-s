'use strict';

describe('Component: ServiceComponent', function () {

  // load the controller's module
  beforeEach(module('frupysApp'));

  var ServiceComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ServiceComponent = $componentController('ServiceComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
