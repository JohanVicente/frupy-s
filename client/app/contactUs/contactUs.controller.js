'use strict';
(function(){

class ContactUsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('frupysApp')
  .component('contactUs', {
    templateUrl: 'app/contactUs/contactUs.html',
    controller: ContactUsComponent
  });

})();
