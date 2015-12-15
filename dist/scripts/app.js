//The root Angular module will act as a container for different parts of our application.

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
                 controller: 'LandingCtrl as landing',//in LandingCtrl.js refer to variables as this.title but in landing.html as landing.title
                 templateUrl: '/templates/landing.html'
             })
             .state('album', {
                 url: '/album',
                 templateUrl: '/templates/album.html'
             })
             .state('collection', {
                 url: '/collection',
                 controller: 'CollectionCtrl as collection',
                 templateUrl: '/templates/collection.html'
         });
     }
//define a module with angular.module:
//The first argument passed, blocJams, is the prescribed name of the module. The array, passed as the second argument, injects dependencies into an application.
     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();