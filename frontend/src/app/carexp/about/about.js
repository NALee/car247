(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.about', []);
  
    // Module configuration
    angular.module('frontend.carexp.about')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.about', {
                parent: 'carexp',
                url: '/about',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/about/about.html',
                        controller: 'AboutController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
