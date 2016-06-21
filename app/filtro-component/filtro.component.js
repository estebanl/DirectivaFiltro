(function () {

    var module = angular.module('app');

    module.component('filtro', {
        templateUrl: 'app/filtro-component/filtro.component.html',
        controllerAs: 'vm',
        controller: function ($log, catalogo, clienteService) {
            var vm = this;

            vm.$onInit = function () {
                consultarCatalogo('ciudades', 'CIUDAD');
                consultarCatalogo('zonas', 'ZONA');
                consultarCatalogo('subzonas', 'SUB_ZONA');
                consultarCatalogo('cumplimientoCartera', 'CUMPLIMIENTO_CARTERA');
                consultarCatalogo('formasPago', 'FORMA_PAGO');
                consultarCatalogo('sucursales', 'SUCURSAL');
                consultarCatalogo('estadosCliente', 'ESTADO_CLIENTE');
            };

            vm.enviar = function () {
                clienteService.consultarClientes(vm.cliente).then(function (data) {
                    vm.clientes = data.data;
                    console.log(data.data);
                });
            };

            vm.cancelar = function  () {
                vm.cliente = {};
            }
            function consultarCatalogo(contenedor, nombre) {
                catalogo.consultarPorNombre(nombre).then(function (data) {
                    vm[contenedor] = data.data;
                }).catch(function (error) {
                    //  consultarCatalogo(contenedor,nombre);
                });
            };
        }
    });

} ());