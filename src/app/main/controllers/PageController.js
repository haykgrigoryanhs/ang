'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var PageController = ['$rootScope', '$scope', 'HelperService', function ($rootScope, $scope, HelperService) {

        function init() {
            $rootScope.pending = false;
            $rootScope.credentials = null;
            $rootScope.isLoggedIn = false;
            $rootScope.inboxes = null;
        }

        $scope.initCredentials = function (credentials) {
            $rootScope.credentials = localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')).data.credentials : credentials.data.credentials;
            $scope.$broadcast('initCredentials');
        };

        $scope.show = function () {
            return false;
        };

        $scope.loggedIn = function () {
            return localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : $rootScope.isLoggedIn;
        };

        $scope.emitInboxLoading = function (id) {
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