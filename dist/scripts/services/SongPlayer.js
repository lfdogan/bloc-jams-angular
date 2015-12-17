 (function() {
     function SongPlayer() {
         var SongPlayer = {};
         
         //two private attributes: currentSong and currentBuzzObject
         /**currentSong
         * @desc object element from album's song array
         * @type {Object}
         */
         var currentSong = null; // null or song item from album.songs
         /**currentBuzzObject
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;
         
         
         //one private function: setSong
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song){
             if (currentBuzzObject) { 
                     currentBuzzObject.stop();
                     currentSong.playing = null;
                 } //if currently playing a song, stop song. change html attribute playing to null.
                 currentBuzzObject = new buzz.sound(song.audioUrl, {
                     formats: ['mp3'],
                     preload: true
                 }); // set a Buzz sound object from albumPicasso.songs[song].audioUrl 
                 currentSong = song; //assign the songs array element that was clicked on to the currentSong variable
         };
         //assignment7: Write a private playSong function. This function should do two things: Play the current Buzz object: currentBuzzObject.play(); Set the playing property of the song object to true: song.playing = true; Replace all instances when these two lines of code are used together with the playSong function. Write documentation for the remaining undocumented attributes and functions of the SongPlayer service.
          /**
         * @function playSong
         * @desc Play song and set html attribute "playing" to true
         * @param {Object} song
         */
         var playSong = function(song){
             currentBuzzObject.play();    //play current Buzz song
             song.playing = true; //change html attribute playing to true so that pause button is shown
         };
         
         //two public methods: SongPlayer.play and SongPlayer.pause
          /**
         * @function SongPlayer.play
         * @desc play song
         * @param {Object} song
         */
         SongPlayer.play = function(song) { // click on song play button to play
             if (currentSong !== song) { //no song or different song playing. does not PAUSE current song
                 setSong(song);
                 playSong(song);
             } else if (currentSong === song) { //if click on currently playing song
                if (currentBuzzObject.isPaused()) {   currentBuzzObject.play(); } //if song is paused play the song
                }  
         };
          /**
         * @function SongPlayer.pause
         * @desc pause song
         * @param {Object} song
         */
         SongPlayer.pause = function(song) { // click on song pause button to pause
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