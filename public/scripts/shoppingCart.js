angular.module("app").service("shoppingCart", function() {
    var products = [];

    this.addProduct = function(product) {
        products.push(product);
    };

    this.getContents = function() {
        return products;
    };
});