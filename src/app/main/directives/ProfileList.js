(function (helpSystems) {
    helpSystems.directive('profileList', function () {
        return {
            restrict: 'C',
            scope: {
                profileList: '=data'
                // columnsOverflowLength: '='
            },
            templateUrl: 'app/main/views/profile_list.html',
            link: function (scope, element, attrs) {
            }
        }
    });
})(helpSystems);