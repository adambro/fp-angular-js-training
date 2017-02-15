(function(angular) {
	"use strict";

	angular.module("app").controller("orderController", function($scope, Order) {
        $scope.order = new Order();
        
        $scope.placeOrder = function() {
            if ($scope.orderForm.$valid) {
                $scope.order.$save();
            }
        }
    });

}(window.angular));