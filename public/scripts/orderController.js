(function(angular) {
	"use strict";

	angular.module("app").controller("orderController", function($scope, $location) {
        $scope.placeOrder = function() {
            console.log($scope.customer);
        }
    });

}(window.angular));