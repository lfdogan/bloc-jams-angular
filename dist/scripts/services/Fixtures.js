 (function() {
     function Fixtures() {
         var Fixtures = {};
         
         
         // ALBUM 01
        var albumPicasso = {
            name: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            genre: 'Classical',
            styles: 'Chamber Music',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                {name: 'Blue', length: 161.71, audioUrl: '/assets/music/bloc_jams_music/blue' },//161.71 seconds
                {name: 'Green', length: 103.96, audioUrl: '/assets/music/bloc_jams_music/green' },
                {name: 'Red', length: 268.45, audioUrl: '/assets/music/bloc_jams_music/red' },
                {name: 'Pink', length: 153.14, audioUrl: '/assets/music/bloc_jams_music/pink' },
                {name: 'Magenta', length: 374.22, audioUrl: '/assets/music/bloc_jams_music/magenta' },
            ]
        };
        // ALBUM 20
        var albumMarconi = {
            name: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            genre: 'Classical',
            styles: 'Chamber Music',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                {name: 'Hello, Operator?', length: '1:01'},
                {name: 'Ring, ring, ring', length: '5:01'},
                {name: 'Fits in your pocket', length: '3:21'},
                {name: 'Can you hear me now?', length: '3:14'},
                {name: 'Wrong phone number', length: '2:15'},
                {name: 'Last Song', length: '6:15'}
            ]
        };
        // ALBUM http://www.allmusic.com/album/the-buffet-mw0002896346
        var mw0002896346 = {
            name: 'The Buffet',
            artist: 'R. Kelly',
            label: 'RCA',
            year: '2015',
            genre: 'R&B',
            styles: 'Contemporary R&B, Adult Contemporary R&B',
            albumArtUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/984/MI0003984115.jpg?partner=allrovi.com',
            songs: [
                {name: 'The Poem', length: '1:19'},
                {name: 'Poetic Sex', length: '4:21'},
                {name: 'Anything Goes', length: '4:35'},
                {name: "Let's Make Some Noise", length: '4:14'},
                {name: 'Marching Band', length: '3:56'},
                {name: 'Switch Up', length: '3:24'},
                {name: 'Wanna Be There', length: '4:15'},
                {name: 'All My Fault', length: '3:25'},
                {name: 'Wake Up Everybody', length: '3:41'},
                {name: 'Backyard Party', length: '3:32'},
                {name: 'Sextime', length: '4:14'},
                {name: "Let's Be Real Now", length: '3:05'}
            ]
        };

        // ALBUM http://www.allmusic.com/album/the-moving-sidewalk-mw0002083060
        var mw0002083060 = {
            name: 'The Moving Sidewalk',
            artist: 'Alan Hampton',
            label: 'RCA',
            year: '2011',
            genre: 'Pop/Rock',
            styles: 'Alternative Singer/Songwriter, Alternative/Indie Rock',
            albumArtUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/125/MI0003125428.jpg?partner=allrovi.com',
            songs: [
                {name: 'Staring at the Sun', length: '4:09'},
                {name: 'Change Your Mind', length: '2:47'},
                {name: 'Home to You', length: '2:44'},
                {name: "Loud and Clear", length: '3:27'},
                {name: 'Kaleidscope', length: '2:51'},
                {name: 'Where Did You Go?', length: '4:01'},
                {name: 'Oh My God', length: '3:10'},
                {name: 'Undercover', length: '2:31'},
                {name: "There's This Side", length: '3:43'},
                {name: 'Travel', length: '3:01'}
            ]
        };

        // ALBUM http://www.allmusic.com/album/death-of-a-bachelor-mw0002891900
        var mw0002891900 = {
            name: 'Death of a Bachelor',
            artist: 'Panic! At the Disco',
            label: 'RCA',
            year: '2000',
            genre: 'Pop/Rock',
            styles: 'Alternative/Indie Rock, Emo-Pop, Punk-Pop',
            albumArtUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/955/MI0003955172.jpg?partner=allrovi.com',
            songs: [
                {name: 'Victorious', length: '4:09'},
                {name: "Don't Threaten Me with a Good Time", length: '2:47'},
                {name: 'Hallelujah', length: '2:44'},
                {name: "Emperor's New Clothes", length: '3:27'},
                {name: 'Death of a Bachelor', length: '2:51'},
                {name: 'Crazy=Genius', length: '4:01'},
                {name: 'LA Devotee', length: '3:10'},
                {name: 'Golden Days', length: '2:31'},
                {name: "The Good, the Bad and the Dirty", length: '3:43'},
                {name: 'House of Memories', length: '3:01'},
                {name: 'Impossible Year', length: '3:01'}
            ]
        };

        // ALBUM http://www.allmusic.com/album/untamed-mw0002896652
        var mw0002896652 = {
            name: 'Untamed',
            artist: 'Cam / Camaron Ochs',
            label: 'RCA',
            year: '2015',
            genre: 'Country',
            styles: 'Contemporary Country, Country-Pop',
            albumArtUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/979/MI0003979990.jpg?partner=allrovi.com',
            songs: [
                {name: 'Untamed', length: '3:30'},
                {name: "Hungover on Heartache", length: '3:13'},
                {name: 'Mayday', length: '3:36'},
                {name: "Burning House", length: '3:51'},
                {name: 'Cold in California', length: '3:10'},
                {name: 'My Mistake', length: '3:20'},
                {name: 'Runaway Train', length: '2:57'},
                {name: 'Half Broke Heart', length: '3:04'},
                {name: "Want It All", length: '3:09'},
                {name: "Country Ain't Never Been Pretty", length: '3:39'},
                {name: 'Village', length: '3:55'}
            ]
        };
         
         // album http://www.allmusic.com/album/no-pads-no-helmetsjust-balls-mw0000658489
         var mw0000658489 = {
             name: 'No Pads, No Helmets...Just Balls',
             artist: 'Simple Plan',
             label: 'Atlantic',
             year: '2002',
             genre: 'Pop/Rock',
             styles: 'Alternative/Indie Rock, Punk-Pop',
             albumArtUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0001/890/MI0001890206.jpg?partner=allrovi.com',
             songs: [
                 {name: "I'd Do Anything", length: '3:17'},
                 {name: "The Worst Day Ever", length: '3:27'},
                 {name: "You Don't Mean Anything", length: '2:28'},
                 {name: "I'm Just a Kid", length: '3:18'},
                 {name: "When I'm With You", length: '2:37'},
                 {name: "Meet You There", length: '4:14'},
                 {name: "Addicted", length: '3:52'},
                 {name: "My Alien", length: '3:08'},
                 {name: "God Must Hate Me", length: '2:44'},
                 {name: "I Won't Be There", length: '3:09'},
                 {name: "One Day", length: '3:15'},
                 {name: "Perfect", length: '4:37'}
             ]
         };




    Fixtures.getAlbum = function() {
         return albumPicasso;
     };
         
         
         
         
//assignment6Services: Add a second public method to the Fixtures service named getCollection. This method takes one argument, numberOfAlbums, and returns an array with the specified number of albumPicasso objects pushed to it.
//         Fixtures.getCollection = function(numberOfAlbums) {
//            var albums = [];
//            for (var i=0; i < numberOfAlbums; i++) { 
//                albums.push(angular.copy(albumPicasso));
//            };
//            return albums;
//         };
//angular.copy is one of several global function components on the angular object. We add an albums property and set its value to an empty array. Within the for loop, we use angular.copy to make copies of albumPicasso and push them to the array.
   
         Fixtures.getCollection = function() {
             var albums = [albumPicasso, albumMarconi, mw0002896346, mw0002083060, mw0002891900, mw0002896652, mw0000658489];
             return albums;
         }
                
                

         
         return Fixtures;
     }
 
     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures); //register a Fixtures service using the Factory recipe
 })();