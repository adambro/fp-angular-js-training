(function(angular) {
	"use strict";

	angular.module("app").directive("cartItemCounter", function() {
		return {
			template: '<div class="cartItemCounter"></div>'
		};
	});

}(window.angular));