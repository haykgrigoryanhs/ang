/**
 * Created by akaramya on 2/17/2017.
 */
helpSystems.factory('gridService', ['$http',  function($http) {
    return {
        getListData: function(grid_type, start, offset) {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('app/main/models/' + grid_type + '.json').
                    then(function (resp) {
                        if(!offset || offset > resp.data.data.length) offset = resp.data.data.length;
                        resp.data.max_count = resp.data.data.length;
                        resp.data.data = resp.data.data.slice(start,offset);
                        return resp.data;
                    },
                    function (err) {
                        return err;
                    });
        }
    };
}]);