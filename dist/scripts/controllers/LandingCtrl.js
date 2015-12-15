 (function() {
     function LandingCtrl() {
         this.heroTitle = "Turn the Music Up!";
         // adds heroTitle as a property on the LandingCtrl's $scope object. $scope properties contain the model, or data, that the view will present, and are available to the template at the point in the DOM where the controller is registered. The LandingCtrl for Bloc Jams is registered for the landing.html template in app.js: $stateProvider.state('landing', {      url: '/',      controller: 'LandingCtrl as landing',     templateUrl: '/templates/landing.html'          })
     }
     angular
         .module('blocJams') //retrieve the already-defined module in app.js where we'll find the array of dependencies
         .controller('LandingCtrl', LandingCtrl); // array of dependencies is the LandingCtrl object contsructor function
 })();

//We've named the controller LandingCtrl. Recall that object constructors are capitalized by convention to distinguish them from other functions.