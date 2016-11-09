angular.module("app").controller("cartController", function($scope, shoppingCart) {
    $scope.products = shoppingCart.getContents();
})