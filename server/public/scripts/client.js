const petHotelApp = angular.module('PetHotelApp', ['ngRoute']);
// ROUTES
petHotelApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>Home</h1>'
    }).when('/pets', {
        templateUrl: '../views/pets.html',
        controller: 'PetsController as vm'
    }).when('/owners', {
        templateUrl: '../views/owners.html',
        controller: 'OwnersController as vm'
    })
}]); //END ROUTES 

// PETS CONTROLLER
petHotelApp.controller('PetsController', ['$http', function ($http) {
    let vm = this;



}])
// OWNERS CONTROLLER
petHotelApp.controller('OwnersController', ['$http', function ($http) {
    let vm = this;



}])
