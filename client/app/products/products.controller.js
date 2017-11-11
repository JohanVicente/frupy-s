'use strict';
(function(){

class ProductsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('frupysApp')
  .component('products', {
    templateUrl: 'app/products/products.html',
    controller: ProductsComponent
  });

})();
