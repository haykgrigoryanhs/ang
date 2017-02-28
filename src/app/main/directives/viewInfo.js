/**
 * Created by akaramya on 2/22/2017.
 */
helpSystems.directive('viewInfo',function(){
    return {
        templateUrl: 'app/main/views/templates/details.html',
        restrict: 'E',
        scope: {
            details: "=info"
        }
    }
});