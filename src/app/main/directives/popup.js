/**
 * Created by akaramya on 2/22/2017.
 */
helpSystems.directive('popup', function(){
    return {
        templateUrl: 'app/main/views/templates/popup.html',
        restrict: 'E',
        scope: {
            title: '=popupTitle',
            body: "=popupBody",
            type: "@popupContentType",
            popupSave: "=",
            modalId: '@modal'
        }
    };
})