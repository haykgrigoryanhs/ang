'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */

// ng-controller="SettingController
(function (helpSystems) {
    var VNavController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {
        $scope.selectedIname = 'None';
        $scope.selectedI = null;
        $scope.showFolders = false;

        function init() {
            $scope.credentials  = $rootScope.credentials;
        }

        $scope.$on('initCredentials', function (events, args) {
            $scope.credentials  = $rootScope.credentials;
            $scope.connectionDefinition = $scope.credentials[0].connectionDefinition;
        });

        $scope.selectI = function(I){
            $scope.selectedI = I;
            if(I){
                $scope.selectedIname = I.connectionDefinition.alias;
                $scope.showFolders = true;
            }else{
                $scope.selectedIname = 'None';
                $scope.showFolders = false;
            }

        };

        $scope.loadInboxes = function () {
            var id = $scope.selectedI.id;
            console.log("VNav cntr id", id);
            $scope.emitInboxLoading(id);
        };


        $scope.loadUserSettings = function() {
            $scope.emitUserSettingLoading();
        };

        $scope.showAdminSettings = function(){
            $scope.emitAdminSettings();
        };


        init();
    }];

    helpSystems.controller('VNavController', VNavController);
})(helpSystems);