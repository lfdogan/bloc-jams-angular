 (function() {
     function SongPlayer($rootScope, Fixtures) {//Inject the Fixtures service into the SongPlayer service. Because $rootScope is a service, we must inject it as a dependency before we can use it.
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
         * @desc 
         1. if currently playing a song, stop song and change html attribute playing to null. 
         2. set a Buzz sound object from albumPicasso.songs[song].audioUrl.
         3. To update the song's playback progress from anywhere, we'll add a $rootScope.$apply event in the SongPlayer service. This creates a custom event that other parts of the Angular application can "listen" to. This will be our first custom event. Adding the $apply to the SongPlayer.setSong method starts "applying" the time update once we know which song to play. Use buzz library's getTime() method to determine current position of song. Set the to SongPlayer.currentTime. We used the Buzz library bind() method in the Foundation as well. timeupdate is one of a number of HTML5 audio events we can use with Buzz's bind() method. The bind() method adds an event listener to the Buzz sound object – in this case, we listen for a timeupdate event. When the song playback time updates, we execute a callback function. This function sets the value of SongPlayer.currentTime to the current playback time of the current Buzz object using another one of the Buzz library methods: getTime(), which gets the current playback position in seconds. Using $apply, we apply the time update change to the $rootScope.
         4. assign the songs array element that was clicked on to the currentSong variable
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

        
             
             //using $apply will continually update the seek bar and current time.
             /*1. check to see if the song has reached the end. If not then getTime and getVolume. 
                    If song has reached the end play the next song. */
             currentBuzzObject.bind('timeupdate', function() {
                 $rootScope.$apply(function() { 
                     if (currentBuzzObject.getTime() != currentBuzzObject.getDuration()) {
                        SongPlayer.currentTime = currentBuzzObject.getTime();
                        SongPlayer.volume = currentBuzzObject.getVolume();
                     } else SongPlayer.next();
                 });
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
         * @function stopSong
         * @desc stop current Buzz song. change html attribute playing to null so that play button is shown
         * @param {Object} song
         */
         var stopSong = function(song){
              currentBuzzObject.stop();
              SongPlayer.currentSong.playing = null;
             //song.playing = null;
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
          /**SongPlayer.currentTime
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
         SongPlayer.currentTime = null;
         /**SongPlayer.volume
         * @desc number between 0 and 100 to hold volume level. default sound value is 80. not sure what I'm supposed to do with this variable!
         * @type number
         */         
         //SongPlayer.volume; 
         
         
         
         
         
         
         
         
         
         
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
                    stopSong();
              } else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             } 
         };
          /**
         * @function SongPlayer.next
         * @desc PLAYS THE NEXT SONG ONLY IF THERE IS A HIGHTER TRACK NUMBER FROM CURRENT SONG!!!. get the index of the currently playing song and then increase that index by one. If new number is equal to or larger than length of songs array then stop playing current song and set the current song to null. If the new number is not too high set "song" to new index number, run setSong and playSong functions on the new song number.
         * @param none
         */         
          SongPlayer.next = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex++;
              if (currentSongIndex >= currentAlbum.songs.length) {
                  stopSong(song);
              } else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
         };
         
         
         
          /** The setCurrentTime method checks if there is a current Buzz object, and, if so, 
          uses the Buzz library's setTime method to set the playback position in seconds.
          <seek-bar value="{{ playerBar.songPlayer.currentTime }}" 
                    max="{{ playerBar.songPlayer.currentSong.length }}" 
                    on-change="playerBar.songPlayer.setCurrentTime(value)"></seek-bar>
             * @function setCurrentTime
             * @desc Set current time (in seconds) of currently playing song
             * @param {Number} time
             */
         SongPlayer.setCurrentTime = function(time) {
                 if (currentBuzzObject) {
                     currentBuzzObject.setTime(time);
                 }
             };
         /* change the volume. The Buzz library has a setVolume method. The range is 0-100.*/
          SongPlayer.setVolume = function(number){
             currentBuzzObject.setVolume(number);
         };
         
         
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();




//SongPlayer.play function: The play method takes an argument (song) which we'll get from the Album view when a user clicks the play button; the ngRepeat directive used in the Album view template will dictate which song to pass into the function. The play method creates a new Buzz object using the song's audioUrl property and then calls Buzz's own play method on the object.
//ng-click="album.songPlayer.play(song)".... 
    //album = Refers to the controller. We use "controller as" syntax: AlbumCtrl as album in our config block in app.js.
    //.songPlayer = A property on the album object: this.songPlayer = SongPlayer;, where this refers to the controller.
    //.play(song) = A method returned by the SongPlayer service, which we've injected and made available to AlbumCtrl.