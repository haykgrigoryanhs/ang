/**
 * Created by hgrigory on 1/25/2017.
 */

var API = {
    robotweb : 'http://localhost:3030/insite/robotweb/',
    rjswd : 'http://localhost:3030/insite/rjswd/'
};


var helpSystems = angular.module('HS', [
    'ngCookies',
    'ngSanitize',
    'ngStorage',
    // 'ui.router',
    'ui.bootstrap',
    // 'ngMessages',
    // 'ui.multiselect',
    // 'jQueryScrollbar',
    'ui.select',
    // 'btford.socket-io',
    // 'wiz.markdown',
    // 'ngTagsInput',
    'angular-page-visibility',
    // 'angular-appinsights'
    /*'ngMockE2E'*/
]).config(['$httpProvider', function ($httpProvider) {
    // enable http caching
    $httpProvider.defaults.cache = false;
}]);

    

    