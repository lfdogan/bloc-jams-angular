 (function() {
     function SongPlayer() {
         var SongPlayer = {};
         
         
         var currentSong = null;
         var currentBuzzObject = null;
         
         
         SongPlayer.play = function(song) { // click function for song play button
             if (currentSong !== song) { //no song or different song playing. does not PAUSE current song
                 if (currentBuzzObject) { 
                     currentBuzzObject.stop();
                     currentSong.playing = null;
                 } //if currently playing a song, stop song. change html attribute playing to null.
                 currentBuzzObject = new buzz.sound(song.audioUrl, {
                     formats: ['mp3'],
                     preload: true
                 }); // set a Buzz sound object from albumPicasso.songs[song].audioUrl 
                 currentSong = song; //assign the songs array element that was clicked on to the currentSong variable
                 currentBuzzObject.play();    //play current Buzz song
                 currentSong.playing = true; //change html attribute playing to true so that pause button is shown
             } else if (currentSong === song) { //if click on currently playing song
                if (currentBuzzObject.isPaused()) {   currentBuzzObject.play(); } //if song is paused play the song
                }  
        };
         
         
         
         
         
         SongPlayer.pause = function(song) { // click function for song pause button
             currentBuzzObject.pause();
             song.playing = false; //set html attribute to false so that play button is shown
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