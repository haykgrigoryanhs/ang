/**
 * Created by akaramya on 2/28/2017.
 */
helpSystems.directive('itemsForm',function(){
    return {
        templateUrl: 'app/main/views/templates/add_item.html',
        restrict: 'E',
        scope: {
            items: "=info"
        }
    }
});