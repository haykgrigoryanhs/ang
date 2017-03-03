/**
 * Created by akaramya on 1/26/2017.
 */
(function (helpSystems) {
    var SettingController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            $scope.credentials  = $rootScope.credentials;
            //$scope.connectionDefinition = $rootScope.credentials.credentials[0].connectionDefinition;
        }

        $scope.$on('initCredentials', function (events, args) {
            $scope.credentials  = $rootScope.credentials;
            $scope.connectionDefinition = $scope.credentials[0].connectionDefinition;
        });

        $scope.loadUserSettings = function() {
            $scope.emitUserSettingLoading();
        };



        $scope.showAdminSettings = function(){
            $scope.emitAdminSettings();
        }

        init();
    }];

    helpSystems.controller('SettingController', SettingController);
})(helpSystems);