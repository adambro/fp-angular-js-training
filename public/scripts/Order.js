angular.module('app').factory('Order', function($resource) {
    return $resource('/orders/:id');
});