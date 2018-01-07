(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.contact', []);
  
    // Module configuration
    angular.module('frontend.carexp.contact')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.contact', {
                parent: 'carexp',
                url: '/contact',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/contact/contact.html',
                        controller: 'ContactController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
