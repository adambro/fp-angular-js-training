(function(angular) {
	"use strict";

	angular.module("app").directive("cartItemCounter", function(shoppingCart) {
		return {
			template: '<div class="cartItemCounter">{{count}}</div>',
            link: function($scope) {
                $scope.count = shoppingCart.getItemCount();
                
                $scope.$on('cartUpdated', function() {
                    $scope.count = shoppingCart.getItemCount();
                });
            }
		};
	});

}(window.angular));