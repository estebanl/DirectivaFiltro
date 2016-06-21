(function(){
    'use strict';

    angular
        .module('app')
        .factory('catalogo', catalogo)

    function catalogo($http,$log){

        return {
            consultarPorNombre: consultarPorNombre
        }

        function consultarPorNombre(nombre){
            return $http.get('http://localhost:49683/MilenioPC/api/Catalogo/GetCatalogoPorNombre?Nombre='+nombre).then(function  (data) {
                return data;
            });
        };
    }

}());