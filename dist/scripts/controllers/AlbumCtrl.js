 (function() {
     //function AlbumCtrl() {
     function AlbumCtrl(Fixtures) {
         //this.albumData = fixtures[0]; //my variation for assignment 5
         //this.albumData = albumPicasso; //assignment 5
         //this.albumData = angular.copy(albumPicasso); // code for lesson 6
         this.albumData = Fixtures.getAlbum(); //new code for lesson 6: Update AlbumCtrl to use the Fixtures service's getAlbum() method
     }
 
     angular
         .module('blocJams')
         //.controller('AlbumCtrl', AlbumCtrl);
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]); //lesson 6: We add Fixtures to AlbumCtrl's array of dependencies. Once injected, the service is available for use within the controller.
 })();