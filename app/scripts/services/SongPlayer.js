 (function() {
     function SongPlayer() {
         var SongPlayer = {};
         
         
         SongPlayer.play = function(song) {
             var currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });
 
         currentBuzzObject.play();    
     };
         
         
         
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();




//SongPlayer.play function: The play method takes an argument (song) which we'll get from the Album view when a user clicks the play button; the ngRepeat directive used in the Album view template will dictate which song to pass into the function. The play method creates a new Buzz object using the song's audioUrl property and then calls Buzz's own play method on the object.
//ng-click="album.songPlayer.play(song)".... 
    //album = Refers to the controller. We use "controller as" syntax: AlbumCtrl as album in our config block in app.js.
    //.songPlayer = A property on the album object: this.songPlayer = SongPlayer;, where this refers to the controller.
    //.play(song) = A method returned by the SongPlayer service, which we've injected and made available to AlbumCtrl.