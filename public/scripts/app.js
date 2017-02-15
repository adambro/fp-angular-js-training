(function(angular) {
	"use strict";

	var app = angular.module("app", ["ngRoute"]);

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
			});
	});

} (window.angular));
