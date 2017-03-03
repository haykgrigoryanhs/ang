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
        controller: function($scope, gridService){
            $scope.sortReverse = false;
            $scope.sortType =  'id';
            $scope.current_page = 1;
            $scope.hideColumns = [];
            $scope.per_page = 10;
            if($scope.gridType!='body'){
                gridService.getListData($scope.gridType, 0, $scope.per_page).then(function(data){
                    $scope.listdata =  data;
                    var datalength = $scope.listdata.max_count;
                    $scope.pages_count = (datalength/$scope.per_page <= 1) ? 0: Math.ceil(datalength/$scope.per_page);
                });
            }
        },
        link: function (scope) {
            scope.sortBy = function(propertyName) {
                scope.sortReverse = (scope.sortType === propertyName) ? !scope.sortReverse : false;
                scope.sortType = propertyName;
            },
            scope.choosePaginationCount = function (e, value) {
                $(e.target).parent().parent().find('.per_page').text(value);
                scope.per_page = value;
                scope.current_page = 1;
                gridService.getListData(scope.gridType, 0, value).then(function(data){
                    scope.listdata =  data;
                    var datalength = scope.listdata.max_count;
                    scope.pages_count = (datalength/scope.per_page <= 1) ? 0: Math.ceil(datalength/scope.per_page);
                });
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

            },
            scope.prevPage = function(){
                if(scope.current_page == 1) return;
                scope.current_page =  scope.current_page - 1;
                scope.goToPage(scope.current_page)
            },
            scope.nextPage = function(){
                if(scope.current_page == scope.pages_count) return;
                scope.current_page =  scope.current_page + 1;
                scope.goToPage(scope.current_page)
            },
            scope.showColumns = function (e, column) {
                var checkbox = $(e.target);
                if (checkbox.attr('checked')) {
                    checkbox.attr('checked', false)
                    scope.hideColumns.push(column)
                } else {
                    checkbox.attr('checked', true)
                    var index = scope.hideColumns.indexOf(column);
                    scope.hideColumns.splice(index,1);
                }
                
            },    
            scope.goToPage = function(page_number){
                scope.current_page = page_number;
                var start = scope.per_page * (scope.current_page - 1)
                var offset = scope.per_page + start;
                gridService.getListData(scope.gridType, start, offset).then(function(data){
                    scope.listdata =  data;
                });
            }   
        }
    }
}]);