'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var VNavController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {
        $scope.selectedIname = 'None';
        $scope.selectedI = null;
        $scope.showFolders = false;

        function init() {
            $scope.credentials  = $rootScope.credentials;
            $scope.definedISeries = $rootScope.credentials.credentials[0].definedISeries;

        }

        $scope.selectI = function(I){
            $scope.selectedI = I;
            if(I){
                $scope.selectedIname = I.alias;
                $scope.showFolders = true;
            }else{
                $scope.selectedIname = 'None';
                $scope.showFolders = false;
            }

        };

        $scope.loadInboxes = function () {

            var id = $scope.selectedI.id;
            $scope.emitInboxLoading(id);

        };





        init();
    }];

    helpSystems.controller('VNavController', VNavController);
})(helpSystems);