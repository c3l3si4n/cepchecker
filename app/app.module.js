(() => {
    'use strict';
    angular.module('app',[])
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
    function appController($http) {
        let vm = this;
        this.checkCep = function(cep) {
            $http.get(`https://viacep.com.br/ws/${cep}/json/`).then(function(response){
                vm.cepData = response.data;
            })
        }
    }


})();
