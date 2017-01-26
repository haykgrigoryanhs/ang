/**
 * Created by hgrigory on 1/25/2017.
 */
'use strict';
/**
 * @description This service is responsible for requests which assigned with user authentication login/logout etc
 * @param  serviceCamp {Object} app main module
 */

(function (helpSystems) {

    var AuthService = ['$http', '$rootScope', function ($http, $rootScope) {
        var Auth = {};


        Auth.login = function(params) {
            $rootScope.pending = true;
            return $http.put(API.robotweb + 'login', params, { 'bbbb': 'aaaa'});
        };



        Auth.logout = function() {
            // $rootScope.pending = true;
            return $http.put(API.robotweb + 'logout');
        };


        return Auth;
    }];
    helpSystems.factory('AuthService', AuthService);
})(helpSystems);