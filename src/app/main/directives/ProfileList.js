(function (helpSystems) {

    helpSystems.directive('profileList', ['HelperService', function(HelperService) {
        return {
            restrict: 'C',
            scope: {
                profileList: '=data'
            },
            templateUrl: 'app/main/views/profile_list.html',
            controller: function($scope, HelperService) {
                $scope.show_current_row = true;
                $scope.profileListData = HelperService.getProfileList();

                $scope.profileList = $scope.profileListData.userProfiles;
                
            },
            link: function (scope, element, attrs) {
            }
        }
    }]);
})(helpSystems);