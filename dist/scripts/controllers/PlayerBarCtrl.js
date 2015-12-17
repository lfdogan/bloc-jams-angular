 (function() {
     function PlayerBarCtrl(Fixtures, SongPlayer) {
         this.albumData = Fixtures.getAlbum();
         this.songPlayer = SongPlayer;
     }
 
     angular
         .module('blocJams')
         .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
 })();

// inject both the Fixtures and SongPlayer services into the controller
// register PlayerBarCtrl for the player bar template (add ng-controller="PlayerBarCtrl as playerBar" to root element)