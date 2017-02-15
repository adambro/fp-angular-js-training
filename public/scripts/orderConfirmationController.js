angular.module('app').controller('orderConfirmationController', function ($scope, $routeParams, Order) {
    var orderId = $routeParams.orderId;

    $scope.order = Order.get({get: orderId});
    console.log($scope.order);
});