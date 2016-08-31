(function() {
    'use strict';

    angular.module('app.customer')
        .controller('customerController', customerController);

    function customerController() {
        var vm = this;
        vm.username = "Bilou Djago";

        vm.newCustomer = {};

        vm.customers = [{
            name: 'Bilal Djaghout',
            address: 'Yahia maghmouli n°: 107 - Guelma'
        },
        {
            name: 'Abderrahim Hellaci',
            address: 'Yahia maghmouli n°: 406 - Guelma'
        }];

        vm.addCustomer = function () {
            vm.customers.push({name: vm.newCustomer.name, address: vm.newCustomer.address});
            vm.newCustomer = {};
        }
    }

})();
