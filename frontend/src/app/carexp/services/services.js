(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.services', []);
  
    // Module configuration
    angular.module('frontend.carexp.services')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.services', {
                parent: 'carexp',
                url: '/services',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/services/services.html',
                        controller: 'ServicesController'
                    },
                }
            })
            .state('carexp.servicesDetail', {
                parent: 'carexp',
                url: '/servicesDetail',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/services/services-detail.html',
                        controller: 'ServicesDetailController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
