/**
 * Created by hgrigory on 1/25/2017.
 */
/**
 * @description This factory is responsible for intercepting requests and handling logged out actions ,
 * for all 401 responses and responses with isLoggedIn: false we are showing login popup
 */
'use strict';
helpSystems.factory('AuthInterceptor', ['$q', '$rootScope', '$window', function ($q, $rootScope, $window) {

  return {
    request: function (config) {

        alert('request');
      // // use this to destroying other existing headers
      // var manco = ($rootScope.common) ? $rootScope.common.manco : '';
      // config.headers.manco = manco;


      return config;
    },
    response: function (response) {
        alert('response');
   


      return response || $q.when(response);
    },
    responseError: function (rejection) {
        alert(rejection.status);

      return $q.reject(rejection);
    }
  };
}]);
