 (function() {
     function AlbumCtrl(Fixtures, SongPlayer) { //services injected
         
         //new code for lesson 6: Update AlbumCtrl to use the Fixtures service's getAlbum() method
         this.albumData = Fixtures.getAlbum();
         
                  

         
         
         this.songPlayer = SongPlayer;
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]); //array of dependencies contains services and lastly callback function
 })();
     
//lesson 6: We add Fixtures service to AlbumCtrl's array of dependencies. Once injected, the service is available for use within the controller.
//lesson 7: The songPlayer property holds the service and makes the service accessible within the Album view.
