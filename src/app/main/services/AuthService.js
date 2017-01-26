/**
 * Created by hgrigory on 1/25/2017.
 */
'use strict';
/**
 * @description This service is responsible for requests which assigned with user authentication login/logout etc
 * @param  serviceCamp {Object} app main module
 */

(function (helpSystems) {

    var AuthService = ['$http', function ($http) {
        var Auth = {};


        Auth.login = function(params) {

            // return $http({
            //     method: 'PUT',
            //     //withCredentials:true,
            //     headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'X-Frame-Options': 'SameOrigin'},
            //     data: params,
            //     url: API.robotweb + 'login'
            // });

            // return $http.put(API.robotweb + 'login', params, { 'bbbb': 'aaaa'});

                return {
                    errorMessage:null,
                    guest:false,
                    statusCode:200,
                    success:true,
                    validationMessages:null
                }

        };



        Auth.logout = function() {
            // return $http.get(API.sc_main + 'logout');
            return {
                errorMessage:null,
                guest:false,
                statusCode:200,
                success:true,
                validationMessages:null
            }
        };


        return Auth;
    }];
    helpSystems.factory('AuthService', AuthService);
})(helpSystems);