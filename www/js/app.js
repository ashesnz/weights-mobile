// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.main-index', {
      url: '/main',
      views: {
        'main-tab': {
          templateUrl: 'main-index.html',
          controller: 'MainIndexCtrl'
        }
      }
    })

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'adopt.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'about.html'
        }
      }
    })

    .state('search-index', {
      url: '/search',
      templateUrl: 'search.html',
      controller: 'SearchController'
    })

    .state('herds-index', {
      url: '/herds',
      templateUrl: 'herds-index.html',
      controller: 'HerdsIndexController'
    })

    .state('animal-list-index2', {
      url: '/herd',
      templateUrl: 'animal-list-index.html',
      controller: 'HerdIndexController'
    })

    .state('animal-list-index', {
      url: '/herd/:ptptcode',
      templateUrl: 'animal-list-index.html',
      controller: 'HerdIndexController'
    })

    .state('animal-detail', {
      url: '/animal/:id',
      templateUrl: 'animal-detail.html',
      controller: 'AnimalDetailController'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/main');

});

