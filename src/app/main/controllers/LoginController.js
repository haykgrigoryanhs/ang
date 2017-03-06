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
            AuthService.login($scope.loginFormData).then(
                function (resp) {
                    if (resp && resp.data.success) {
                        HelperService.getCredentials().then(function (resp) {
                            $scope.initCredentials(resp);
                            $rootScope.isLoggedIn = true;
                        });
                    }
                },
                function (resp) {
                    console.log(resp);
                });
        };

        $scope.logout = function () {
            AuthService.logout().then(
                function (response) {
                    if (response && response.data.success) {
                        $rootScope.isLoggedIn = false;
                    }
                },
                function (resp) {
                    console.log(resp);
                });
        };

        init();
    }];

    helpSystems.controller('LoginController', LoginController);
})(helpSystems);