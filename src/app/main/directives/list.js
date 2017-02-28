/**
 * Created by akaramya on 2/22/2017.
 */
helpSystems.directive('list', ['gridService', function(gridService){
    return {
        restrict: 'E',
        templateUrl: 'app/main/views/templates/list.html',
        scope: {
            listdata: "=",
            gridType: "@listdata"
        },
        link: function (scope) {
            scope.sortBy = function(propertyName) {
                scope.sortReverse = (scope.sortType === propertyName) ? !scope.sortReverse : false;
                scope.sortType = propertyName;
            },
            scope.choosePagination = function () {

            },
            scope.refreshGrid = function(){
                 gridService.getListData(scope.gridType).then(function(data){
                    scope.listdata =  data;
                 });
            },
            scope.addGridItem = function(){
                scope.title = "Add Item";
                $('#add_item').modal('toggle');
            },
            scope.checkedAll = function () {
                if (scope.checkAll) {
                    scope.checkAll = true;
                } else {
                    scope.checkAll = false;
                }
                angular.forEach(scope.listdata.data, function (item) {
                    item.checked = scope.checkAll;
                });

            };
        }
    }
}]);