/// <reference path="scripts/angular.min.js" />


var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {

    //Defina todas as propriedados, objetos, funcoes que serao usados no inicio da controller

    var carros = [
        { marca: "Fiat", modelo: "Uno", anoModelo: "2008" },
        { marca: "BMW", modelo: "328i", anoModelo: "1998" },
        { marca: "Hyundai", modelo: "Tucson", anoModelo: "2013" }
    ];
    
    $scope.carros = carros;
    $scope.carro = {};
    $scope.successTextAlert = "Carro Adicionado com Sucesso";
    $scope.showSuccessAlert = true;

    $scope.activate = function () {
        console.log($scope.carro);
    }

    //nao esquecer de colocar o objeto na assinatura do metodo, voce estava passando a funcao sem estar assinado corretamente
    $scope.adicionarCarro = function (carro) {
        $scope.carros.push(carro);
        delete $scope.carro;
        
    };

    $scope.apagarCarros = function () {
        $scope.carros = carros.filter(function (carro) {
            if (!carro.selecionado) return carro;
        });
    };

    $scope.isCarroSelecionado = function (carros) {
        return !carros.some(function (carro) {
            return carro.selecionado;
        });
    };

    $scope.fecharAlerta = function () {
        $scope.showSuccessAlert = false;
    };

    //cliclo de vida inicial da controller no angularJS, sempre que acionar esse metodo é executado, o mesmo que o evento js => onInit
    $scope.activate();
});
