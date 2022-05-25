var myApp = angular.module("MyModule");

myApp.service('dataService', function ($http) {
    this.getTipoVeiculo = function (callback) {
        $http.get('https://catfact.ninja/fact').then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.log('1');
            console.error('Error: ' + response);
        });
    };
});
    