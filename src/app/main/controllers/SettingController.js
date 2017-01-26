'use strict';

(function (helpSystems) {
    var SettingController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            HelperService.init();
        }

        $scope.showAdminSettings = function(){
            $scope.emitAdminSettings();
        };

        $scope.loadUserSettings = function() {
            $scope.emitUserSettingLoading();
        };

        init();
    }];

    helpSystems.controller('SettingController', SettingController);
})(helpSystems);