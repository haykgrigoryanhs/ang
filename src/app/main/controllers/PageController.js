'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var PageController = ['$rootScope', '$scope', 'HelperService', function ($rootScope, $scope, HelperService) {

        function init() {

            console.log("root scope", $rootScope);
            console.log("scope", $scope);
            // alert('init PageController');

            $rootScope.credentials = HelperService.getCredentials();
            $rootScope.isLoggedIn = true;
            $rootScope.inboxes = null;
            HelperService.init();
        }

        $scope.show = function () {
            return false;
        };

        $scope.loggedIn = function () {
            return $rootScope.isLoggedIn;
        };

        $scope.emitInboxLoading = function (id) {
            console.log("Emit here from child object");
            $scope.$broadcast('showInboxes', { id: id });
        };


        $scope.emitAdminSettings = function(){
            $scope.$broadcast('showAdminSettings');
        }

        /*$scope.emitProductConnectionsList = function(){
            $scope.$broadcast('showProductConnectionsList');
        }*/

        $scope.emitUserSettingLoading = function () {
            $scope.$broadcast('showUserSettings');
        };



        init();
    }];

    helpSystems.controller('PageController', PageController);
})(helpSystems);