 (function() {
     function SongPlayer(Fixtures) {//Inject the Fixtures service into the SongPlayer service
         var SongPlayer = {};
         
         
         
         //private attributes:
         /**
         * @desc stores album object
         * @type {Object}
         */
         var currentAlbum = Fixtures.getAlbum(); //getAlbum method stores the album information
         /**currentSong
         * @desc object element from album's song array
         * @type {Object}
         */
         //var currentSong = null; // null or song item from album.songs
         /**currentBuzzObject
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;

         
         
         
         //private functions
        /**
         * @function setSong
         * @desc if currently playing a song, stop song. change html attribute playing to null. set a Buzz sound object from albumPicasso.songs[song].audioUrl. assign the songs array element that was clicked on to the currentSong variable
         * @param {Object} song
         */
         var setSong = function(song){
             if (currentBuzzObject) { 
                     currentBuzzObject.stop();
                     SongPlayer.currentSong.playing = null;
                 }
                 currentBuzzObject = new buzz.sound(song.audioUrl, {
                     formats: ['mp3'],
                     preload: true
                 });
                 SongPlayer.currentSong = song;
         };
         //assignment7: Write a private playSong function. This function should do two things: Play the current Buzz object: currentBuzzObject.play(); Set the playing property of the song object to true: song.playing = true; Replace all instances when these two lines of code are used together with the playSong function. Write documentation for the remaining undocumented attributes and functions of the SongPlayer service.
          /**
         * @function playSong
         * @desc play current Buzz song. change html attribute playing to true so that pause button is shown
         * @param {Object} song
         */
         var playSong = function(song){
             currentBuzzObject.play();
             song.playing = true;
         };
         /**
         * @function getSongIndex
         * @desc get the array index of the song
         * @param {Object} song
         * @return {number} song
         */
         var getSongIndex = function(song) {
             return currentAlbum.songs.indexOf(song);
             };
   
         
         
         
         
         
         
         //public attributes
         /**SongPlayer.currentSong
         * @desc song object element from album's songs array or 'null'
         * @type {Object}
         */         
         SongPlayer.currentSong = null;     
         
         
         
         
         
         
         
         //public methods
          /**
         * @function SongPlayer.play
         * @desc click on song play button to play, assign value of either variable. It will assign song when play method (function) is accessed from song row. It will assign (public) currentSong when play method (function) is accessed from player-bar. no song or different song playing. does not PAUSE current song. if click on currently playing song. if song is paused play the song
         * @param {Object} song
         */
         SongPlayer.play = function(song) { 
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) {
                 setSong(song);
                 playSong(song);
             } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {   currentBuzzObject.play(); }
                }  
         };
          /**
         * @function SongPlayer.pause
         * @desc click on song pause button to pause, set html attribute to false so that play button is shown
         * @param {Object} song
         */
         SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong; 
             currentBuzzObject.pause();
             song.playing = false;
         };
          /**
         * @function SongPlayer.previous
         * @desc PLAYS THE PREVIOUS SONG ONLY IF THERE IS A LOWER TRACK NUMBER FROM CURRENT SONG!!!. get the index of the currently playing song and then decrease that index by one. If new number is negative then stop playing current song and set the current song to null. If the new number is not negative set "song" to new index number, run setSong and playSong functions on the new song number.
         * @param none
         */         
          SongPlayer.previous = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex--;
              if (currentSongIndex < 0) {
                  currentBuzzObject.stop();
                  SongPlayer.currentSong.playing = null;
              } else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
              
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