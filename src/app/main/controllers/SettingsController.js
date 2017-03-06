/**
 * Created by akaramya on 1/26/2017.
 */
(function (helpSystems) {
    var SettingsController = ['$rootScope', '$scope', 'HelperService', 'AuthService', function ($rootScope, $scope, HelperService, AuthService) {

        function init() {
            $scope.credentials  = $rootScope.credentials;
            $scope.settingsType = false;
            $scope.userFormData = {};
        }

        $scope.$on('showUserSettings', function (event, args) {
            console.log("show User setting event");
            $scope.settingsType = 'userSettingList';
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
        });

        $scope.$on('changeColumnEmit', function (obj, column, checkbox) {
            $scope.$broadcast('changeColumnBroadcast', column, checkbox);
        });

        $scope.$on('showAdminSettings', function (events) {
            $scope.settingsType = 'systemSettingsList';
        });

        $scope.loadProfilesList = function (data) {
            $scope.profileListData = HelperService.getProfileList();
            $scope.profileList = $scope.profileListData.userProfiles;
            $scope.settingsType = 'profileListGrid';
        };

        $scope.newProfilePage = function () {
            $scope.settingsType = 'newProfilePage';
        };

        $scope.saveProfile = function () {

            var formData = {
                name: $scope.userFormData.alias,
                username: $scope.userFormData.username,
                password: $scope.userFormData.password
            };


            HelperService.saveUser(formData).then(
                function (resp) {
                    $scope.userFormData = {};
                    $scope.loadProfilesList();
                },
                function (resp) {
                    console.log(resp);
                });
        };

        $scope.closeProfile = function () {
            $scope.loadProfilesList();
        };

        $scope.showProductConnectionsList = function () {
            $scope.connectionDefinition = $rootScope.credentials;
            $scope.settingsType = 'product_connections';
        };

        $scope.addNewConnection = function () {
            $scope.settingsType = 'add_connection';
        };

        $scope.closeConnection = function () {
            $scope.showProductConnectionsList();
        };

        $scope.editAuthSettings = function () {
            $scope.settingsType = 'auth_settings';
        };


        $scope.editAuthSettings = function () {
            $scope.settingsType = 'auth_settings';
        };

        $scope.authBtnClick = function (save) {
            if (save) {
            }
            $scope.settingsType = 'systemSettingsList';
        };

        $scope.editLoggingSettings = function () {
            $scope.settingsType = 'logging_settings';
        };

        $scope.loggingBtnClick = function (save) {
            if (save) {
            }
            $scope.settingsType = 'systemSettingsList';
        };


        $scope.saveConnection = function () {
            var formData = {
                address: $scope.productFormData.address,
                alias: $scope.productFormData.alias,
                library: $scope.productFormData.library,
                password: $scope.productFormData.password,
                port: '',
                productType: 1,
                username: $scope.productFormData.username
            };

            HelperService.saveConnection(formData).then(
                function (resp) {
                    $scope.productFormData = {};

                    $scope.contentType = 'product_connections';
                }, function (resp) {
                    $scope.productFormData = {};

                    $scope.contentType = 'product_connections';
                });
        };

        init();
    }];

    helpSystems.controller('SettingsController', SettingsController);
})(helpSystems);