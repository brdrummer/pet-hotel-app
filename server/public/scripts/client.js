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
    vm.petsArray = [];
    vm.pets = {};
    vm.namesList=[];
    vm.getPets = function () {
        $http({
            method: 'GET',
            url: '/pets',
        }).then(function (response) {
            vm.petsArray = response.data;
            console.log(vm.petsArray);
            
        }).catch((error) => {
            console.log('error ON client side', error);

        });
    }

    
    vm.getOwners = function () {

        $http({
            method: 'GET',
            url: '/owners',
        }).then(function (response) {
            vm.namesList=response.data
            console.log(vm.namesList);
            
        }).catch((error) => {
            console.log('error ON client side', error);

        });
    }

    vm.addPets = function () {
        $http({
            method: 'POST',
            url: '/pets',
            data: vm.pets
        }).then(function () {
            vm.pets.pet = '';
            vm.pets.breed = '';
            vm.pets.color = '';
            vm.getPets();
            vm.getOwners();
        }).catch((error) => {
            console.log('error ON client side', error);
        });
    }
    vm.getPets();
    vm.getOwners();

    vm.deletePets = function (thing) {
        $http({
            method: 'DELETE',
            url: '/pets',
            params: { id: thing.id }
        }).then(function () {

            vm.getPets();
            vm.getOwners();
        }).catch((error) => {
            console.log('error ON client side', error);
        });
    }
    vm.getPets();
    vm.getOwners();

    vm.changePets = function (petToUpdate) {

        $http({
            method: 'PUT',
            url: '/pets',
            params: petToUpdate
        }).then(function () {
            vm.getPets();
            vm.getOwners();
            console.log('a pet has been updated!');
        })
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
