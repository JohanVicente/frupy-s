'use strict';
(function(){

class ServiceComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('frupysApp')
  .component('service', {
    templateUrl: 'app/service/service.html',
    controller: ServiceComponent
  });

})();
