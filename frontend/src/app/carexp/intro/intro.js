(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.intro', []);
  
    // Module configuration
    angular.module('frontend.carexp.intro')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.intro', {
                parent: 'carexp',
                url: '/intro',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/intro/intro.html',
                        controller: 'IntroController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
