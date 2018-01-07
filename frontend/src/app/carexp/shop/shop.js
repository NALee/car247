(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.shop', []);
  
    // Module configuration
    angular.module('frontend.carexp.shop')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.shop', {
                parent: 'carexp',
                url: '/shop',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/shop/shop.html',
                        controller: 'ShopController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
