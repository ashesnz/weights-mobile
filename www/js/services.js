angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
/*.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});*/


.factory('HerdService', function($q) {

    var herds = [
        {"ptptcode": "PDGY"},
        {"ptptcode": "GFHX"}
    ]


    var herd = [
        {"id": 1, "ptptcode": "GFHX", "animalkey": 30099104, "birthid": "GFHX-12-1", "birthdate": "2012-07-26", "birthyear": 2012, "livewtbw": 161.9, "livewtbv": 6.6},
        {"id": 2, "ptptcode": "GFHX", "animalkey": 30099105, "birthid": "GFHX-12-3", "birthdate": "2012-07-26", "birthyear": 2012, "livewtbw": 172.9, "livewtbv": -2.9},
        {"id": 3, "ptptcode": "PDGY", "animalkey": 40099104, "birthid": "PDGY-12-1", "birthdate": "2013-07-26", "birthyear": 2013, "livewtbw": 120.9, "livewtbv": 7.6},
        {"id": 4, "ptptcode": "PDGY", "animalkey": 40099105, "birthid": "PDGY-12-3", "birthdate": "2013-07-26", "birthyear": 2013, "livewtbw": 131.6, "livewtbv": -8.9},
        {"id": 5, "ptptcode": "PDGY", "animalkey": 40099106, "birthid": "PDGY-12-3", "birthdate": "2013-07-26", "birthyear": 2013, "livewtbw": 211.4, "livewtbv": -12.5},
        {"id": 6, "ptptcode": "PDGY", "animalkey": 40099107, "birthid": "PDGY-12-3", "birthdate": "2013-07-26", "birthyear": 2013, "livewtbw": 145.2, "livewtbv": -23.5}
    ];



    // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
    // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
    // service with a JSON service that gets its data from a remote server without having to changes anything
    // in the modules invoking the data service since the api is already async.

    return {
        findAll: function() {
            console.log('Hello');
            var deferred = $q.defer();
            deferred.resolve(herds);
            return deferred.promise;
        },

        findById: function(herdId) {
            var deferred = $q.defer();
            var animal = herd[herdId - 1];
            deferred.resolve(animal);
            return deferred.promise;

        },

        findByPtptCode: function(searchKey) {
            console.log('Hello');
            var deferred = $q.defer();
            var results = herd.filter(function(element) {
                var ptptcode = element.ptptcode;
                return ptptcode.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise;

        },

        searchResults: function(animal) {

            var deferred = $q.defer();
            console.log(herd);
            var results = herd.filter(function(animal) {
                console.log(animal);
                return animal.birthyear == 2012;
            });
            deferred.resolve(results);
            return deferred.promise;

        }

        /*findByName: function(searchKey) {
         var deferred = $q.defer();
         var results = herd.filter(function(element) {
         var fullName = element.firstName + " " + element.lastName;
         return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
         });
         deferred.resolve(results);
         return deferred.promise;
         },

         findByManager: function (managerId) {
         var deferred = $q.defer(),
         results = herd.filter(function (element) {
         return parseInt(managerId) === element.managerId;
         });
         deferred.resolve(results);
         return deferred.promise;
         }*/

    }

});
