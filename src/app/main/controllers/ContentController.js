'use strict';
/**
 * Created by hgrigory on 1/25/2017.
 */


(function (helpSystems) {
    var ContentController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            $scope.inboxesData = null;
            $scope.inboxes = null;
            $scope.documentListData = null;
            $scope.documentList = null;

            $scope.systemId = null;
            HelperService.init();
            $scope.contentType = false;
        }


        $scope.$on('showInboxes', function (events, args) {
            var paras = {
                $top:25,
                $skip:0,
                $direction:0,
                $orderby:null
            };
            $scope.systemId = args.id;

            $scope.inboxesData = HelperService.getInboxes(paras, $scope.systemId);
            $scope.inboxes = $scope.inboxesData.responses;
            $scope.contentType = 'inboxList';
            console.log($scope.inboxes);
        });

        $scope.loadDocumentsList = function (data) {
            $scope.documentListData = HelperService.getInboxDocuments($scope.systemId, data.fsuseracc);
            $scope.documentList = $scope.documentListData.responses;
            $scope.contentType = 'documentList';
        };


        $scope.loadDocumentDetails = function (data) {

            $scope.documentDetails = HelperService.getDocumentDetails($scope.systemId, data.docId);
            console.log($scope.documentDetails);
        };

        $scope.$on('showAdminSettings', function (events) {
            $scope.contentType = 'systemSettingsList';
        });

        $scope.showProductConnectionsList = function () {
            $scope.connectionDefinition = $rootScope.credentials.credentials[0].definedISeries;
            $scope.contentType = 'product_connections';
        };

        $scope.addNewConnection = function() {
            $scope.contentType = 'add_connection';
        }

        $scope.connectionBtnClick = function(save) {
            if(save){

            }
            $scope.contentType = 'product_connections';
        }

        $scope.editAuthSettings = function () {
            $scope.contentType = 'auth_settings';
        }

        $scope.authBtnClick = function(save) {
            if(save){

            }
            $scope.contentType = 'systemSettingsList';
        }

        $scope.editLoggingSettings = function () {
            $scope.contentType = 'logging_settings';
        }

        $scope.loggingBtnClick = function(save) {
            if(save){

            }
            $scope.contentType = 'systemSettingsList';
        }

        init();
    }];

    helpSystems.controller('ContentController', ContentController);
})(helpSystems);