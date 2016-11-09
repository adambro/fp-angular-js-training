angular.module("app").service("shoppingCart", function() {
    var products = {};

    this.addProduct = function(product) {
        products[product.id] = product;
        if (!products[product.id].amount) {
            products[product.id].amount = 0;
        }
        products[product.id].amount += 1;
    };

    this.getContents = function() {
        return products;
    };
});