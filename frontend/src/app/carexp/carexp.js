(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp', [
      'frontend.carexp.intro',
      'frontend.carexp.home'
    ]);
  
    // Module configuration
    angular.module('frontend.carexp')
      .config([
        '$stateProvider',
        function($stateProvider) {
          $stateProvider
            .state('carexp', {
              parent: 'frontend',
              data: {
                access: 1
              }
            })
          ;
        }
      ])
      .run(['$rootScope', '$state', '$timeout', 'UserService', 'AuthService',
        function($rootScope, $state, $timeout, UserService, AuthService) {

            if (AuthService.isAuthenticated()) {
                // $state.go('carexp.home')
            } else {
                $state.go('carexp.intro');
            }

            // $rootScope.initPage = function($scope) {
            //     loadCurrentUser($scope);
            // };

            // function loadCurrentUser($scope) {
            //     $scope.user = UserService.user();
            //     // Set current scope reference to models
            //     if ($scope.setUser > 0 && $scope.setUser === $scope.user.id) {
            //         $scope.user.id = $rootScope.setUser;
            //     } else {
            //         $scope.setUser = $scope.user.id;
            //     }
            // };

            // $rootScope.initLogin = function() {
            //     loadCurrentUser($rootScope);
            // };

            // function init() {
            //     if (AuthService.isAuthenticated()) {
            //         $rootScope.initLogin();
            //     }
            // };

            // init();
      }]);
}());
