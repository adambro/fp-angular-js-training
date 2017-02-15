angular.module('app').directive('multilineRequired', function() {
    return {
        require: 'ng-model',
        link: function($scope, $elem, $attr, modelContoller) {
            // if there's no data in model it shoud be OK, use 2 validators: view + model
            modelContoller.$validators.multilineRequired = function(modelValue, viewValue) {
                return viewValue === undefined || viewValue === null || viewValue === '' || viewValue.indexOf("\n") !== -1;
            }
        }
    }
});
