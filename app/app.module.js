(() => {
    'use strict';
    angular.module('app',['ngRoute','ngAnimate','ngToast'])
    .controller('AppController',appController)
    .config(['ngToastProvider', function(ngToastProvider){
        ngToastProvider.configure({
            animation: 'fade',
            horizontalPosition: 'center',
            maxNumber: 1
        });
    }]);
    function appController($http,ngToast) {
        let vm = this;
        this.checkCep = function(cep) {
            $http.get(`https://viacep.com.br/ws/${cep}/json/`).then(function(response){
                vm.cepData = response.data;
                ngToast.success('Cep encontrado!');
            },function(response){
                ngToast.danger('Erro. Talvez seu CEP esteja errado?')
            })
        }
    }


})();
