(function(helpSystems) {
    helpSystems.directive('profileDetail', function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'app/main/views/profile_detail.html',
            link: function(scope) {
                // console.log("id ", scope.data.id);
            }
        }

    });
})(helpSystems);