(function(helpSystems) {
    helpSystems.directive('actionList', function() {
        return {
            restrict: 'E',
            scope: {
                actionList: '=data',
                profileId: '='
            },
            templateUrl: 'app/main/views/action_list.html',
            link: function(scope, element, attrs) {

                element.bind('click', function(e) {
                    if (e.target.innerText === 'Delete') {
                        element.parent().remove();
                    } else if (e.target.innerText === 'Details') {
                        $("#myModal_"+scope.profileId).modal();
                    }
                });
            }
        }
    });
})(helpSystems);
