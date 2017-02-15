(function(angular) {
	"use strict";

	angular.module("app").controller("orderController", function($scope, $location) {
        $scope.placeOrder = function() {
            if ($scope.orderForm.$valid) {
                console.log($scope.customer);
            }
        }
    });

}(window.angular));