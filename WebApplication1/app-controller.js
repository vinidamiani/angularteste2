/// <reference path="scripts/angular.min.js" />


var myApp = angular.module("MyModule", ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })
        .when("/lista", {
            templateUrl: "templates/lista.html",
            controller: "ListaController"
        })
});
