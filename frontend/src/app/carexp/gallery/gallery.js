(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp.gallery', []);
  
    // Module configuration
    angular.module('frontend.carexp.gallery')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp.gallery', {
                parent: 'carexp',
                url: '/gallery',
                data: {
                    access: 1
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/carexp/gallery/gallery.html',
                        controller: 'GalleryController'
                    },
                }
            })
          ;
        }
      ])
    ;
}());
