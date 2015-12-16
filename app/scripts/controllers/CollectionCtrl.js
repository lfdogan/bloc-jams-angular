 (function() {
     function CollectionCtrl() {
            this.albums = [];
            for (var i=0; i < fixtures.length; i++) { 
                this.albums.push(angular.copy(fixtures[i])); //use ALL albums (fixtures array) rather than just one repeated
            //for (var i=0; i < 12; i++) { 
                //this.albums.push(angular.copy(albumPicasso));
                //angular.copy is one of several global function components on the angular object. We add an albums property and set its value to an empty array. Within the for loop, we use angular.copy to make copies of albumPicasso and push them to the array.
            }
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();

//Register the CollectionCtrl to the collection state in app.js
//And link to the CollectionCtrl.js script source in index.html: