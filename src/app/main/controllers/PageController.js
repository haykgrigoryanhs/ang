'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var PageController = ['$rootScope', '$scope', 'HelperService', function ($rootScope, $scope, HelperService) {

        function init() {

            console.log($rootScope);
            console.log($scope);
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
            $scope.$broadcast('showInboxes', { id: id });
        };



        init();
    }];

    helpSystems.controller('PageController', PageController);
})(helpSystems);