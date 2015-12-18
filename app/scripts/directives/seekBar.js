 (function() {
     function seekBar() {
         return {
             templateUrl: '/templates/directives/seek_bar.html',
             replace: true,
             restrict: 'E'
         };
     }
 
     angular
         .module('blocJams')
         .directive('seekBar', seekBar);
 })();

//register a seekBar directive.
//For directives, the callback function (in this case, seekBar) is a factory function. It returns an object that describes the directive's behavior to Angular's HTML compiler. 