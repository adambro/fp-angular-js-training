angular.module("app").controller("productsController", function($scope, $http) {
    // $scope.products = [
    //     { title: "Product 1", price: 19.95, stockQuantity: 1 },
    //     { title: "Product 2", price: 39.99, stockQuantity: 30 },
    //     { title: "Product 3", price: 7.50, stockQuantity: 5 },
    //     { title: "Product 4", price: 1007.30, stockQuantity: 0 },
    // ];
    $http.get("/products").then(function(response) {
        $scope.products = response.data;
    });

    var openedRows = {};
    $scope.toggleDetails = function(id) {
        if (openedRows[id] === undefined) {
            openedRows[id] = false;
        }
        openedRows[id] = !openedRows[id];
    };

    $scope.areDetailsVisible = function(id) {
        return openedRows[id];
    };
});
