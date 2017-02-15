angular.module("app").directive("tab", function() {
    return {
        // specify that directive needs parent
        // ^ - find in any parent
        require: "^tabset",
        // controller is always 4th param in link function
        link: function($scope, $elem, $attr, tabsetContoller) {
            tabsetContoller.registerTab($attr.title);
        }
    }
});

angular.module("app").directive("tabset", function() {
    return {
        template: '<div class="tabs">' +
            '<ul>' +
            '<li ng-repeat="tab in knownTabs">{{tab}}</li>' +
            '</ul>' +
            '<div ng-transclude></div>' +
            '</div>',
        transclude: true,
        // link function would replace the values, because it's executed at the end
        // link: function($scope) {
        //     $scope.knownTabs = ['A', 'B', 'C'];
        // },
        // metody dostępne dla dyrektyw potomnych
        controller: function($scope) {
            $scope.knownTabs = [];
            this.registerTab = function(tabTitle) {
                $scope.knownTabs.push(tabTitle);
            }
        }
    };
});

