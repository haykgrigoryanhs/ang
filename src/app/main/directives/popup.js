/**
 * Created by akaramya on 2/22/2017.
 */
helpSystems.directive('popup', function(){
    return {
        templateUrl: 'app/main/views/templates/popup.html',
        restrict: 'E',
        scope: {
            title: '=?popupTitle',
            templateBody: "=templateBody",
            listContent: "=",
            type: "@popupContentType",
            popupAdd: "=?",
            popupEdit: "=?",
            item: "=?",
            modalId: '@modal',
            showPagination:"=",
            showExactColumns:"=",
            showPerPage:"=",
            showRefresh:"="
        },
        link: function (scope,element) {
            scope.addItem = function(){
                var item = { "grid_info": {}};
                var items =  $(element).find('input[name^=item_prop]').map(function(idx, elem) {
                    var key = $(elem).data('item');
                    item["grid_info"][key] = $(elem).val();
                }).get()
                scope.$parent.listdata.max_count = scope.$parent.listdata.max_count + 1;
                item["grid_info"].id = scope.$parent.listdata.max_count;
                scope.$parent.listdata.data.push(item);
                $("#"+scope.modalId).modal('hide');
            },
            scope.editItem = function(item){
                var items =  $(element).find('input[name^=item_prop]').map(function(idx, elem) {
                    var key = $(elem).data('item');
                    item[key] = $(elem).val()
                }).get();
                scope.$parent.listdata.data[item.id-1]['grid_info'] = item;
                $("#"+scope.modalId).modal('hide');
            }
        }
    };
})