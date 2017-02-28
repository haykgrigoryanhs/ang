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
            $scope.userFormData = {};
            $scope.productFormData = {};
        }



        $scope.$on('showInboxes', function (events, args) {
            var paras = {
                $top:25,
                $skip:0,
                $direction:0,
                $orderby: ''
            };
            $scope.systemId = args.id;

            HelperService.getInboxesAccess({}, $scope.systemId).then(function (resp) {
                if(resp.data.access){
                    HelperService.getInboxes(paras, $scope.systemId).then(function (resp) {
                        $scope.inboxes = resp.data.responses;
                        $rootScope.pending = false;
                        $scope.contentType = 'inboxList';
                    });
                }
            });

           // var data =  HelperService.getInboxes(paras, $scope.systemId);
           //  if(data){
           //      $rootScope.pending = false;
           //  }
           //  $scope.inboxes = data.responses;
           //  $scope.contentType = 'inboxList';
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
            // var data_columns_length = 0;
            // var columns_overflow = 0;
            // var min_columns_length = 4;
            // var default_row_length = 637;

            $scope.profileListData = HelperService.getProfileList();

            $scope.profileList = $scope.profileListData.userProfiles;
            // var columns = $scope.profileList.structure.columns;

            // for (var i in columns) { data_columns_length += 1; } //counting number of columns from data/server
            // if (data_columns_length > min_columns_length) { columns_overflow = data_columns_length - min_columns_length; } // counting overflow columns for grid change

            // $scope.columnsOverflowLength = columns_overflow;


            $scope.contentType = 'profileList';
            $rootScope.pending = false;
            // HelperService.getProfileList().then(function (resp) {
            //     $scope.profileListData = resp.data;
            //     $scope.profileList = $scope.profileListData.userProfiles;
            //     $scope.contentType = 'profileList';
            //     $rootScope.pending = false;
            // });

        };

        $scope.newProfilePage = function () {
            $scope.contentType = 'newProfilePage';
        };

        $scope.saveProfile = function () {

            var formData = {
                name: $scope.userFormData.alias,
                username: $scope.userFormData.username,
                password: $scope.userFormData.password
            };


            HelperService.saveUser(formData).then(function (resp) {
                $scope.userFormData = {};
                $rootScope.pending = false;
                $scope.loadProfilesList();
                // $scope.contentType = 'userSettingList';
            });
        };

        $scope.closeProfile = function () {
            $scope.loadProfilesList();
        }


        $scope.loadDocumentDetails = function (data) {
            HelperService.getDocumentDetails($scope.systemId, data.docId).then(function (resp) {
                $rootScope.pending = false;
                $scope.documentDetails = resp.data;

                $scope.data = [
                    {
                        label: 'Title',
                        val: $scope.documentDetails.docDetails.title,
                    },{
                        label: 'Doc path',
                        val: $scope.documentDetails.docDetails.docpath,
                    },
                    {
                        label: 'Doc Id',
                        val: $scope.documentDetails.docDetails.docid,
                    },{
                        label: 'Doc type',
                        val: $scope.documentDetails.docDetails.doctype,
                    }
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
        };

        $scope.closeConnection = function () {
            $scope.showProductConnectionsList();
        };

        $scope.saveConnection = function() {
            var formData = {
                address: $scope.productFormData.address,
                alias: $scope.productFormData.alias,
                library: $scope.productFormData.library,
                password: $scope.productFormData.password,
                port: '',
                productType: 1,
                username: $scope.productFormData.username
            };

            HelperService.saveConnection(formData).then(function (resp) {
                $scope.productFormData = {};

                $rootScope.pending = false;
                $scope.contentType = 'product_connections';
            }, function (resp) {
                $scope.productFormData = {};

                $rootScope.pending = false;
                $scope.contentType = 'product_connections';
            });
        };

        $scope.editAuthSettings = function () {
            $scope.contentType = 'auth_settings';
        };

        $scope.authBtnClick = function(save) {
            if(save){

            }
            $scope.contentType = 'systemSettingsList';
        };

        $scope.editLoggingSettings = function () {
            $scope.contentType = 'logging_settings';
        };

        $scope.loggingBtnClick = function(save) {
            if(save){

            }
            $scope.contentType = 'systemSettingsList';
        };

        init();
    }];

    helpSystems.controller('ContentController', ContentController);
})(helpSystems);