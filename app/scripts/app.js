//The root Angular module will act as a container for different parts of our application.
//define a module with angular.module:
//The first argument passed, blocJams, is the prescribed name of the module. The empty array, passed as the second argument, injects dependencies into an application. For now, there are no dependencies to inject, but we'll cover dependency injection in the next checkpoint.
 (function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,/*hashbang URLs are disabled; that is, users will see clean URLs without the hashbang*/
                requireBase: false/*unrelated to the hashbang issue, but is one way to avoid a common $location error.*/
         });
              $stateProvider
         .state('landing', {
             url: '/',
             templateUrl: '/templates/landing.html'
         })
         .state('album', {
             url: '/album',
             templateUrl: '/templates/album.html'
         })
         .state('collection', {
             url: '/collection',
             templateUrl: '/templates/collection.html'
         });
     }
     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();