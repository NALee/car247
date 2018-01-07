(function () {
    'use strict';

    angular.module('frontend.carexp.services')
        .controller('ServicesController', ['$rootScope', '$scope', '$timeout', '$state',
            function ($rootScope, $scope, $timeout, $state) {

                // $rootScope.initPage($scope);
                
                function init() {
                    $timeout(function() {
                        document.getElementById("nalee").click();
                    }, 1500)
                };

                $scope.goToServicesDetail = function() {
                    $state.go('carexp.servicesDetail')
                }

                init();
            }
        ]);

}());
