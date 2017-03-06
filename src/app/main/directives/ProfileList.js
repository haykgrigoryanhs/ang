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
                $scope.columns = ["ID", "Name", "Username", "Removed","HasPassword"];
            },
            link: function (scope, element, attrs) {
            }
        }
    }]);
})(helpSystems);