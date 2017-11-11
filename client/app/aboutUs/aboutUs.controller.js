'use strict';
(function(){

class AboutUsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('frupysApp')
  .component('aboutUs', {
    templateUrl: 'app/aboutUs/aboutUs.html',
    controller: AboutUsComponent
  });

})();
