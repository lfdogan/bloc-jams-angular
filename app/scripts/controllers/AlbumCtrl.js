 (function() {
     function AlbumCtrl() {
         this.albumData = fixtures[0];
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();