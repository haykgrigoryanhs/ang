'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var NavController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {
        $scope.selectedI = 'None';
        $scope.showFolders = false;

        function init() {
            $scope.credentials  = $rootScope.credentials;
            $scope.definedISeries = $rootScope.definedISeries;

        }

        $scope.logout = function () {
            AuthService.logout().then(function (resp) {
                if(resp && resp.data.success){
                    $rootScope.isLoggedIn = false;
                }
            });
            $rootScope.isLoggedIn = false;
        };






        init();
    }];

    helpSystems.controller('NavController', NavController);
})(helpSystems);