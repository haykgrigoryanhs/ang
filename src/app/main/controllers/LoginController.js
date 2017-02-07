'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var LoginController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            $scope.loginFormData = {};
        }

        $scope.login = function () {
            // var $data = {
            //     password : "admin",
            //     username : "admin"};
            AuthService.login($scope.loginFormData).then(function (resp) {
                $rootScope.pending = false;
                if(resp && resp.data.success){
                    HelperService.getCredentials().then(function (resp) {
                        $rootScope.pending = false;
                        $scope.initCredentials(resp);
                        $rootScope.isLoggedIn = true;
                    });
                }
            },function (resp) {

            });

        };

        $scope.logout = function () {
           AuthService.logout().then(function (response) {
               // $rootScope.pending = false;
               if(response && response.data.success){
                   $rootScope.isLoggedIn = false;
               }

           });

        };

        init();
    }];

    helpSystems.controller('LoginController', LoginController);
})(helpSystems);