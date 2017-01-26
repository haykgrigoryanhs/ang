'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var LoginController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            HelperService.init();
        }

        $scope.login = function () {
            var $data = {
                password : "admin",
                username : "admin"};
            var response = AuthService.login($data);
            if(response && response.success){
                $rootScope.isLoggedIn = true;
            }
        };

        $scope.logout = function () {
           var response =  AuthService.logout();
            if(response && response.success){
               $rootScope.isLoggedIn = false;
           }
        };

        init();
    }];

    helpSystems.controller('LoginController', LoginController);
})(helpSystems);