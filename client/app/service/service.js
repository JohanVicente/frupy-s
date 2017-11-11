'use strict';

angular.module('frupysApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service', {
        url: '/service',
        template: '<service></service>'
      });
  });
