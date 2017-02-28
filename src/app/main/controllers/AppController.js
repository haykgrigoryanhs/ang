/**
 * Created by akaramya on 2/28/2017.
 */
helpSystems.controller('AppController', function($scope, gridService) {
    gridService.getListData('listdata').then(function(data){
        $scope.listdata =  data;
    });
    gridService.getListData('samplelist').then(function(data){
        $scope.samplelist =  data;
    });
    $scope.popupTitle = "Sample List Popup";
});