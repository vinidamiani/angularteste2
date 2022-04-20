/// <reference path="scripts/angular.min.js" />


var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var carros = [
        { marca: "Fiat", modelo: "Uno", anoModelo: "2008" },
        { marca: "BMW", modelo: "328i", anoModelo: "1998" },
        { marca: "Hyundai", modelo: "Tucson", anoModelo: "2013" }
        ];

    $scope.carros = carros;

    $scope.adicionarCarro = function () {
        $scope.carros.push(carro);
        delete $scope.carro;
    };
    $scope.apagarCarros = function () {
        console.log($scope.carros);
    };
});
