var myApp = angular.module("MyModule");

myApp.service('catFactService', function ($http) {
    this.getCatFact = function (callback) {
        $http.get('https://catfact.ninja/fact').then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error('Error: ' + response);
        });
    };
});
    