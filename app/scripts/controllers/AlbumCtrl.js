 (function() {
     function AlbumCtrl() {
//         var currentAlbum = fixtures[1];
//         this.albumArtUrl = currentAlbum.albumArtUrl;
//         this.albumName = currentAlbum.name;
//         this.albumArtist = currentAlbum.artist;
//         this.albumYear = currentAlbum.year;
//         this.albumLabel = currentAlbum.label;
         
         this.albumData = fixtures[0];
         
         
//            this.albums = [];
   //         for (var i=0; i < albumData.songs.length; i++) { 
    //            this.albums.push(angular.copy(albumData.songs[i])); 
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();