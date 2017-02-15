(function(angular) {
	"use strict";

	var app = angular.module("app", ["ngRoute", 'ngMessages', 'ngResource']);

	app.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "/views/products.html",
				controller: "productsController"
			})
			.when("/cart", {
				templateUrl: "/views/shoppingCart.html",
				controller: "shoppingCartController"
			})
			.when("/order", {
				templateUrl: "/views/order.html",
				controller: "orderController"
			})
			.when("/order-confirmation/:orderId", {
				templateUrl: "/views/orderConfirmation.html",
				controller: "orderConfirmationController"
			});
	});

} (window.angular));
