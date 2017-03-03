/**
 * Created by akaramya on 3/3/2017.
 */
helpSystems.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    };
});