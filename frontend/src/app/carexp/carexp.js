(function() {
    'use strict';
  
    // Define module
    angular.module('frontend.carexp', [
      'frontend.carexp.intro',
      'frontend.carexp.home',
      'frontend.carexp.about',
      'frontend.carexp.services',
      'frontend.carexp.gallery',
      'frontend.carexp.shop',
      'frontend.carexp.blog',
      'frontend.carexp.contact'
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

            if (!AuthService.isAuthenticated()) {
              $state.go('carexp.intro');
            }

            $rootScope.goToHomePage = function() {
              var currentPage = $rootScope.tabItems.filter(function(item) {
                return item.active;
              })
              currentPage[0].active = false;
              $rootScope.tabItems[0].active = true;
              $state.go('carexp.home')
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
