angular.module("app").directive("tab", function() {

});

angular.module("app").directive("tabset", function() {
    return {
        template: '<div class="tabs">' +
            '<ul>' +
            '<li ng-repeat="tab in knownTabs">{{tab}}</li>' +
            '</ul></div>',
        link: function($scope) {
            $scope.knownTabs = ['A', 'B', 'C'];
        }
    };
});

