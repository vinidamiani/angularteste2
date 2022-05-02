/// <reference path="scripts/angular.min.js" />


var myApp = angular.module("MyModule");

myApp.controller("HomeController", function ($scope, $location) {

    $scope.changeRoute = function(view)
    {
        $location.path(view);
    };
});
