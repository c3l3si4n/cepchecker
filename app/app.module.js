(() => {
    'use strict';
    angular.module('app',['ngRoute','ngAnimate','ngToast'])
    .controller('AppController',appController)
    .filter('switchCases', function(){
        return function(letters){
            var newLetters = "";
            for(var i = 0; i<letters.length; i++){
                if(letters[i] === letters[i].toLowerCase()){
                    newLetters += letters[i].toUpperCase();
                }else {
                    newLetters += letters[i].toLowerCase();
                }
            }

            return newLetters;
        }
    })
    .config(['ngToastProvider', function(ngToastProvider){
        ngToastProvider.configure({
            animation: 'fade',
            horizontalPosition: 'center',
            combineDuplications: true
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
