(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.blog', []);
  
    // Module configuration
    angular.module('frontend.carexp.blog')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.blog', {
                parent: 'carexp',
                url: '/blog',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/blog/blog.html',
                        controller: 'BlogController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
