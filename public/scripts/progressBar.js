angular.module("app").directive("progressBar", function() {
    return {
        template: "<div class='progressBar'><div class='fill' style='width: {{ratio}}%'></div></div>",
        scope: {
            value: "<", // unidirectional binding to directive
            maxValue: "<" // bidirectional binding
        },
        link: function($scope) {
            $scope.$watch("value", function() {
                var value = $scope.value;
                var maxValue = $scope.maxValue;

                $scope.ratio = value > maxValue ? 1 : value / maxValue;
                $scope.ratio *= 100;

                // var value = parseInt($attr.value, 10);
                // var maxValue = parseInt($attr.maxValue, 10);


                // // requires jQuery
                // var fill = $elem.find(".fill");
                // fill.css("width", ratio + "%");
            });

        }
    };
});