'use strict';

angular.module('frupysApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactUs', {
        url: '/contactUs',
        template: '<contact-us></contact-us>'
      });
  });
