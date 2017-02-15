(function(angular) {
	"use strict";

	angular.module("app").service("shoppingCart", function($rootScope) {
		var cart = {};

		this.addProduct = function(product) {
			if (!cart[product.id]) {
				cart[product.id] = { product: product, quantity: 1 };
			} else {
				cart[product.id].quantity += 1;
			}

			$rootScope.$broadcast('cartUpdated');		
		};

		this.getItemCount = function() {
			return Object.keys(cart).reduce(function (previous, key) {
				return previous + cart[key].quantity;
			}, 0);
		};

		this.getProducts = function() {
			var contents = [];

			for (var id in cart) {
				if (cart.hasOwnProperty(id)) {
					contents.push(cart[id]);
				}
			}

			return contents;
		};
	});

}(window.angular));