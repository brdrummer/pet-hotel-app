const petHotelApp = angular.module('PetHotelApp', ['ngRoute']);
// ROUTES
petHotelApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>Home</h1>'
    }).when('/pets', {
        templateUrl: '../views/pet.html',
        controller: 'PetsController as vm'
    }).when('/owners', {
        templateUrl: '../views/owner.html',
        controller: 'OwnersController as vm'
    })
}]); //END ROUTES 

// PETS CONTROLLER
petHotelApp.controller('PetsController', ['$http', function ($http) {
    let vm = this;
    vm.petsArray=[];
    vm.pets = {};
    vm.getPets = function () {

        $http({
            method: 'GET',
            url: '/pets',
     }).then(function (response) {
            console.log(response);
            vm.petsArray = response.data;
        }).catch((error) => {
            console.log('error ON client side', error);
           
        });
    } 


}])
// OWNERS CONTROLLER
petHotelApp.controller('OwnersController', ['$http', function ($http) {
    let vm = this;
    vm.ownersArray = [];
    vm.owners = {};

    vm.getOwners = function () {

        $http({
            method: 'GET',
            url: '/owners',
     }).then(function (response) {
            console.log(response);
            vm.ownersArray = response.data;
        }).catch((error) => {
            console.log('error ON client side', error);
           
        });
    }

    vm.addOwner = function () {
        $http({
            method: 'POST',
            url: '/owners',
            data: vm.owners
        }).then(function () {
            vm.owners.name = '';
            vm.getOwners();
        }).catch((error) => {
            console.log('error ON client side', error);
        });
    }
    vm.getOwners();

    vm.deleteOwner = function (thing) {
        $http({
            method: 'DELETE',
            url: '/owners',
            params: { id: thing.id }
        }).then(function () {

            vm.getOwners();
        }).catch((error) => {
            console.log('error ON client side', error);
        });
    }
    vm.getOwners();


}])
