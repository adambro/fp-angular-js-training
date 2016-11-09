angular.module("app", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/products.html",
                controller: "productsController"
            })
            .when("/shopping-cart", {
                templateUrl: "views/cart.html",
                controller: "cartController"
            })
    });