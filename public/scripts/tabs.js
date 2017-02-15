angular.module("app").directive("tab", function() {
    return {
        // specify that directive needs parent
        // ^ - find in any parent
        require: "^tabset",
        // controller is always 4th param in link function
        link: function($scope, $elem, $attr, tabsetContoller) {
            tabsetContoller.registerTab($attr.title);

            $scope.$on('tabSelected', function(ev, tabTitle) {
                if (tabTitle == $attr.title) {
                    $elem.show();
                }
                else {
                    $elem.hide();
                }
            });
        }
    }
});

angular.module("app").directive("tabset", function() {
    return {
        template: '<div class="tabs">' +
            '<ul>' +
            '<li ng-repeat="tab in knownTabs" ng-click="showTab(tab)">{{tab}}</li>' +
            '</ul>' +
            '<div ng-transclude></div>' +
            '</div>',
        transclude: true,
        link: function($scope) {
            $scope.showTab = function(tabTitle) {
                $scope.$broadcast('tabSelected', tabTitle);
            }

            $scope.showTab($scope.knownTabs[0]);
        },
        // add local scope
        scope: true,
        // metody dostępne dla dyrektyw potomnych
        controller: function($scope) {
            $scope.knownTabs = [];
            this.registerTab = function(tabTitle) {
                $scope.knownTabs.push(tabTitle);
            }
        }
    };
});

