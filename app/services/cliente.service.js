(function () {
    'use strict';

    angular
        .module('app')
        .factory('clienteService', clienteService)

    function clienteService($http, $log) {

        return {
            consultarClientes: consultarClientes
        }

        function consultarClientes(model) {

            return $http.post('http://localhost:51785/api/Clientes',model).then(function  (data) {
                return data;
            }).catch(function  (response) {
                return response;
            });
          /* model.Ciudad = (function () {
               return JSON.stringify(model);
           }());

           return $http({
                method: 'GET',
                url: 'http://localhost:51785/api/Clientes',
                //params: model
                params: { param1: angular.toJson(model, false) }
            }).then(function (response) {
                return response;
            }, function (response) {
                return response;
            }); */
        }
    }

} ());