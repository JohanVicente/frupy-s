'use strict';

angular.module('frupysApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutUs', {
        url: '/aboutUs',
        template: '<about-us></about-us>'
      });
  });
