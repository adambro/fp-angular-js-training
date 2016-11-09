angular.module("app").filter("itemCount", function() {
    return function(count) {
        switch (count) {
            case 0: return "Not available.";
            case 1: return "Just one item left!";
            default: return count + " items in stock.";
        }
    }
});