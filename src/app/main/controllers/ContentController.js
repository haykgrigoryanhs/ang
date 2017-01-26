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
        }



        $scope.$on('showInboxes', function (events, args) {
            var paras = {
                // $top:25,
                // $skip:0,
                $direction:0,
                // $orderby:null
            };
            $scope.systemId = args.id;

            // HelperService.getInboxesAccess({}, $scope.systemId).then(function (resp) {
            //     if(resp.data.access){
            //         HelperService.getInboxes(paras, $scope.systemId).then(function () {
            //             $scope.inboxes = data.responses;
            //             $scope.contentType = 'inboxList';
            //         });
            //     }
            // });

           var data =  HelperService.getInboxes(paras, $scope.systemId);
            if(data){
                $rootScope.pending = false;
            }
            $scope.inboxes = data.responses;
            $scope.contentType = 'inboxList';
        });
        
        $scope.$on('showUserSettings', function(event, args) {
            console.log("show User setting event");
            $scope.contentType = 'userSettingList';
            $scope.userSettinglist = [
                {
                    header: "Assigned Profiles",
                    desc: "Assign a profile to each Product Connection you need to access."
                },
                {
                    header: "Profiles",
                    desc: "Manage your personal profiles."
                },
                {
                    header: "Preferences",
                    desc: "Manage your HelpSystems Insite settings."
                }
            ];
            // $scope.userSettingsData = HelperService.getUserSettings();
        });

        $scope.loadDocumentsList = function (data) {
            HelperService.getInboxDocuments($scope.systemId, data.fsuseracc).then(function (resp) {
                $rootScope.pending = false;
                $scope.documentList = resp.data.responses;
                $scope.contentType = 'documentList';
            });

        };
        
        $scope.loadProfilesList = function (data) {
            $scope.profileListData = HelperService.getProfileList("", "");
            $scope.profileList = $scope.profileListData.userProfiles;
            $scope.contentType = 'profileList';
        };

        $scope.newProfilePage = function () {
            $scope.contentType = 'newProfilePage';
        };

        $scope.saveProfile = function () {
            //...
            console.log("Save");
        };


        $scope.loadDocumentDetails = function (data) {
            HelperService.getDocumentDetails($scope.systemId, data.docId).then(function (resp) {
                $rootScope.pending = false;
                $scope.documentDetails = resp.data;


                $scope.data = [
                    {
                        label: 'Doc path',
                        val: $scope.documentDetails.docDetails.docpath,
                    },
                    {
                        label: 'Doc Id',
                        val: $scope.documentDetails.docDetails.docid,
                    },{
                        label: 'Doc type',
                        val: $scope.documentDetails.docDetails.doctype,
                    },{
                        label: 'Keyword 1',
                        val: $scope.documentDetails.docDetails.keyword1,
                    },{
                        label: 'Keyword 2',
                        val: $scope.documentDetails.docDetails.keyword2,
                    },{
                        label: 'Keyword 3',
                        val: $scope.documentDetails.docDetails.keyword3,
                    },{
                        label: 'Keyword 4',
                        val: $scope.documentDetails.docDetails.keyword4,
                    },{
                        label: 'Keyword 5',
                        val: $scope.documentDetails.docDetails.keyword5,
                    },{
                        label: 'Keyword 6',
                        val: $scope.documentDetails.docDetails.keyword6,
                    },{
                        label: 'Keyword 7',
                        val: $scope.documentDetails.docDetails.keyword7,
                    },{
                        label: 'Keyword 8',
                        val: $scope.documentDetails.docDetails.keyword8,
                    },{
                        label: 'Keyword 9',
                        val: $scope.documentDetails.docDetails.keyword9,
                    },{
                        label: 'Keyword 10',
                        val: $scope.documentDetails.docDetails.keyword10,
                    },
                ];
                $scope.contentType = 'documentDetails';
            });

        };

        $scope.$on('showAdminSettings', function (events) {
            $scope.contentType = 'systemSettingsList';
        });

        $scope.showProductConnectionsList = function () {
            $scope.connectionDefinition = $rootScope.credentials;
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