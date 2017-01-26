/**
 * Created by akaramya on 1/26/2017.
 */
(function (helpSystems) {
    var SettingController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            $scope.credentials  = $rootScope.credentials;
            $scope.connectionDefinition = $rootScope.credentials.credentials[0].connectionDefinition;
        }

        $scope.showAdminSettings = function(){
            $scope.emitAdminSettings();
        }

        init();
    }];

    helpSystems.controller('SettingController', SettingController);
})(helpSystems);