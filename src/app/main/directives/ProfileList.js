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
                $scope.excluded_columns = [];
                $scope.profileListData = HelperService.getProfileList();

                $scope.profileList = $scope.profileListData.userProfiles;
                
                $scope.$on('changeColumnBroadcast', function(obj, column, checkbox) {
                    var checkbox = $(checkbox);

                    if (checkbox.attr('checked')) {
                        checkbox.attr('checked', false);
                        $scope.excluded_columns.push(column)
                    } else {
                        checkbox.attr('checked', true);
                        var index = $scope.excluded_columns.indexOf(column);
                        $scope.excluded_columns.splice(index,1);
                    }
                });
                
            },
            link: function (scope, element, attrs) {
            }
        }
    }]);
})(helpSystems);