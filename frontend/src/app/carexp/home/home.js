(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.home', []);
  
    // Module configuration
    angular.module('frontend.carexp.home')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.home', {
                parent: 'carexp',
                url: '/home',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/home/home.html',
                        controller: 'HomeController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
