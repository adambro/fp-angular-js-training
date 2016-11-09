angular.module("app").service("shoppingCart", function() {
    var items = {};

    this.addProduct = function(product) {
        items[product.id] = product;
        var item = items[product.id];
        if (!item.amount) {
            item.amount = 0;
        }
        item.amount += 1;
    };

    this.getContents = function() {
        return items;
    };
});