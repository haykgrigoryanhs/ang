/**
 * Created by akaramya on 2/23/2017.
 */
helpSystems.filter('camelcase', function() {
    return function(input) {
        input = input || '';
        return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
})