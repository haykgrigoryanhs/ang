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
            $scope.contentType = false;
            $scope.productFormData = {};
            $scope.showGrids = false;
        }


        $scope.$on('showInboxes', function (events, args) {
            var paras = {
                $top: 25,
                $skip: 0,
                $direction: 0,
                $orderby: ''
            };
            $scope.systemId = args.id;

            HelperService.getInboxesAccess({}, $scope.systemId).then(
                function (resp) {
                    if (resp.data.access) {
                        HelperService.getInboxes(paras, $scope.systemId).then(function (resp) {
                            $scope.inboxes = resp.data.responses;
                            $rootScope.pending = false;
                            $scope.contentType = 'inboxList';
                        },function (resp) {
                            $rootScope.pending = false;
                            console.log(resp)
                        });
                    }
                },
                function (resp) {
                    $rootScope.pending = false;
                    console.log(resp)
                });
        });



        $scope.loadDocumentsList = function (data) {
            HelperService.getInboxDocuments($scope.systemId, data.fsuseracc).then(
                function (resp) {
                    $rootScope.pending = false;
                    $scope.documentList = resp.data.responses;
                    $scope.contentType = 'documentList';
                },
                function (resp) {
                    console.log(resp);
                }
            );

        };




        $scope.loadDocumentDetails = function (data) {
            HelperService.getDocumentDetails($scope.systemId, data.docId).then(
                function (resp) {
                    $rootScope.pending = false;
                    $scope.documentDetails = resp.data;

                    $scope.data = [
                        {
                            label: 'Title',
                            val: $scope.documentDetails.docDetails.title,
                        }, {
                            label: 'Doc path',
                            val: $scope.documentDetails.docDetails.docpath,
                        },
                        {
                            label: 'Doc Id',
                            val: $scope.documentDetails.docDetails.docid,
                        }, {
                            label: 'Doc type',
                            val: $scope.documentDetails.docDetails.doctype,
                        }
                    ];
                    $scope.contentType = 'documentDetails';
                },
                function (resp) {
                    console.log(resp);
                });

        };



        init();
    }];

    helpSystems.controller('ContentController', ContentController);
})(helpSystems);