AngularJS training, part 2
----

2017-02-15 Michał Dudak

Event can be send from scope: upwards and downwards.
Controller always creates a scope, directive might.

Angular service is a singleton. It does not have scope (it's global), but we can inject rootScope.
Events are not visible in debug tools, so we create directive to see the effect.


`JSON.stringify()` saves also private Angular vars, so use `angular.toJson()` / `fromJson()` instead.

When directive template is executed it does *replace* the HTML contents that was inside directive (example: <tabset>).

For ng-class object key is class name, value is JS expression.

## Forms

Angular adds classes like `ng-touched ng-invalid` to form elements, so you can use them in CSS. Is it a good idea though?
