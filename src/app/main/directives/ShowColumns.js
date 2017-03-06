(function(helpSystems) {
    helpSystems.directive('showColumns', ['HelperService', function(HelperService) {
        return {
            restrict: 'C',
            scope: {
                
            },
            templateUrl: 'app/main/views/show_columns.html',
            controller: function($scope, HelperService) {
                $scope.profileListData = HelperService.getProfileList();
                $scope.profileList = $scope.profileListData.userProfiles;

                $scope.checkColumn = function(e, column) {
                    var checkbox = e.target;
                    
                    $scope.$emit('changeColumnEmit', column, checkbox);
                };

            },
            link: function(scope, element, attrs, list) {

            }
        };
    }]);
})(helpSystems);
