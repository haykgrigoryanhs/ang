(function(helpSystems) {
    helpSystems.directive('actionList', function() {
        return {
            restrict: 'E',
            scope: {
                profile: '=data',
                profileId: '='
            },
            templateUrl: 'app/main/views/action_list.html',
            link: function(scope, element, attrs) {

                scope.actionClick = function(action) {
                    if (action === 'Delete') {
                        scope.$parent.show_current_row = false;
                    } else if (action === 'Details') {
                        $("#myModal_"+scope.profileId).modal();
                    }
                };
            }
        }
    });
})(helpSystems);
