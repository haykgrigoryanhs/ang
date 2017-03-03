/**
 * Created by akaramya on 2/22/2017.
 */
helpSystems.directive('actionsList', function() {
    return {
        templateUrl: 'app/main/views/templates/actions_list.html',
        restrict: 'E',
        scope: {
            actions: "=",
            disabled: "=",
            itemId: "="
        },
        link: function(scope, element){
            var parent = element.parent().parent();
            scope.runAction = function(action, isDisable){
                if(isDisable) return;
                console.log(action, scope);
                if(action == 'view'){
                    $('#modal_'+scope.itemId).modal('toggle');
                } else if(action == 'delete'){
                    parent.remove()
                }
            }
        }
    };
})