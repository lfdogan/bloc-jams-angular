 (function() {
     function seekBar($document) {//$document must be injected as a dependency
         
         //function calculatePercent: calculates the distance from the start of the status bar in a number between 0 and 1
         //Calculates the horizontal percent along the seek bar where the event (passed in from the view as $event) occurred.
         var calculatePercent = function(seekBar, event) {
             var offsetX = event.pageX - seekBar.offset().left;
             var seekBarWidth = seekBar.width();
             var offsetXPercent = offsetX / seekBarWidth;
             offsetXPercent = Math.max(0, offsetXPercent);
             offsetXPercent = Math.min(1, offsetXPercent);
             return offsetXPercent;
         };
         
         
         
         
         
         
         return {
             templateUrl: '/templates/directives/seek_bar.html',
             replace: true,
             restrict: 'E',
             scope: { },
             link: function(scope, element, attributes) {
                 //Holds the value of the seek bar, such as the currently 
                 //     playing song time or the current volume. Default value is 0.
                 scope.value = 0;
                 //Holds the maximum value of the song and volume seek 
                 //     bars. Default value is 100.
                 scope.max = 100;
                 
                 
                 //Holds the element that matches the directive (<seek-bar>) as a 
                 //     jQuery object so we can call jQuery methods on it.
                 var seekBar = $(element);
                 
                 
                 // percentString: A function that calculates a percent based on the value 
                 //     and maximum value of a seek bar.
                 var percentString = function () {
                     var value = scope.value;
                     var max = scope.max;
                     var percent = value / max * 100;
                     return percent + "%";
                 };
                 
                 
                 //fillStyle: Returns the width of the seek bar fill element based 
                 //        on the calculated percent.
                 scope.fillStyle = function() {
                     return { width: percentString() };
                 };
                 
                 
                 // onClickSeekBar function: run calculatePercent function to determine value 
                 //     between 0 and 1 then multiply by 100 for a percent
                 //Updates the seek bar value based on the seek bar's width and the location 
                 //     of the user's click on the seek bar.
                 scope.onClickSeekBar = function(event) {
                         var percent = calculatePercent(seekBar, event);
                         scope.value = percent * scope.max;
                 };
                 
                 
                 //Similar to scope.onClickSeekBar, but uses $apply to constantly apply the change 
                 //     in value of scope.value as the user drags the seek bar thumb.
                 //     with Angular, $document must be injected as a dependency to use it so 
                 //     it needs to be added as a dependency to the this seekBar directive.
                 scope.trackThumb = function() {
                      $document.bind('mousemove.thumb', function(event) {
                          var percent = calculatePercent(seekBar, event);
                          scope.$apply(function() {
                              scope.value = percent * scope.max;
                          });
                      });
                      $document.bind('mouseup.thumb', function() {
                         $document.unbind('mousemove.thumb');
                         $document.unbind('mouseup.thumb');
                     });
                 };
             }
         };
     }
 
     angular
         .module('blocJams')
         .directive('seekBar', ['$document', seekBar]);//$document must be injected as a dependency to use it
 })();

//register a seekBar directive.
//For directives, the callback function (in this case, seekBar) is a factory function. It returns an object that describes the directive's behavior to Angular's HTML compiler. 