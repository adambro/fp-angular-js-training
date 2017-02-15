(function(angular) {
	"use strict";

	angular.module("app").controller("orderController", function($scope, $location, Order, shoppingCart) {
        $scope.order = new Order();
        $scope.order.cart = shoppingCart.getProducts();

        $scope.placeOrder = function() {
            if ($scope.orderForm.$valid) {
                $scope.order.$save(null, function (responseData) {
                    var orderId = responseData.id;

                    $location.path('/order-confirmation/' + orderId);
                });
            }
        }
    });

}(window.angular));