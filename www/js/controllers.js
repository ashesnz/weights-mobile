angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('MainIndexCtrl', function($scope) {
  // "Pets" is a service returning mock data (services.js)
  //$scope.pets = PetService.all();
})

// A simple controller that fetches a list of data from a service
.controller('SearchController', function($scope, HerdService, $location) {
    // "Herds" is a service returning mock data (services.js)
    $scope.searchAnimal = function(animal) {
        HerdService.searchResults(animal).then(function (herd) {
            console.log(herd);
            $scope.herd = herd;
            $location.path('/herd');

        });
    }
})


.controller('HerdsIndexController', function ($scope, HerdService) {

    $scope.searchKey = "";

    $scope.clearSearch = function () {
        $scope.searchKey = "";
        findAllInHerds();
    }

    var findAllInHerds = function() {

        HerdService.findAll().then(function (herds) {
            $scope.herds = herds;
        });
    }

    findAllInHerds();

})

.controller('HerdIndexController', function ($scope, $stateParams, HerdService) {

    if (!!$stateParams.ptptcode) {
        HerdService.findByPtptCode($stateParams.ptptcode).then(function(herd) {
            $scope.herd = herd;
        });
    }
})

.controller('AnimalDetailController', function ($scope, $stateParams, HerdService) {

})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams) {
  // "Pets" is a service returning mock data (services.js)
//  $scope.pet = PetService.get($stateParams.petId);
});
