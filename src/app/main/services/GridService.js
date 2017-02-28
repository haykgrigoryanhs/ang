/**
 * Created by akaramya on 2/17/2017.
 */
helpSystems.factory('gridService', ['$http',  function($http, $q) {
    return {
        getListData: function(grid_type) {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('app/main/models/' + grid_type + '.json').
                    then(function (resp) {
                        return resp.data;
                    },
                    function (err) {
                        return err;
                    });
        }
    };
}]);