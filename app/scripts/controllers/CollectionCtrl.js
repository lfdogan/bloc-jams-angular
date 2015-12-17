 (function() {
     function CollectionCtrl(Fixtures) {
         //this.albums = Fixtures.getCollection(12); //assignment 6
         this.albums = Fixtures.getCollection(); //my TRIAL after assignment 6
            }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
     //Inject the Fixtures service into CollectionCtrl
 })();

//Register the CollectionCtrl to the collection state in app.js
//And link to the CollectionCtrl.js script source in index.html: