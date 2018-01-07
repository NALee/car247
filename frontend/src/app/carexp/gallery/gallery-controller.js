(function () {
    'use strict';

    angular.module('frontend.carexp.gallery')
        .controller('GalleryController', ['$rootScope', '$scope', '$timeout',
            function ($rootScope, $scope, $timeout) {

                // $rootScope.initPage($scope);
                
                function init() {
                    $timeout(function() {
                        document.getElementById("nalee2").click();
                    }, 2000)
                };

                init();
            }
        ]);

}());
