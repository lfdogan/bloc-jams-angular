 (function() {
     function seekBar($document) {//$document must be injected as a dependency
         
         //function calculatePercent: 
         //    calculates the distance from the start of the status bar in a number between 0 and 1
         //         set offsetX as the to the distance from click location on page minus location of beginning of status bar
         //         set seekBarWidth as length of seek bar
         //         set offsetXPercent: distance from start of bar divided by entire length of bar 
         //                 provides a number between 0 and 1 which is a ratio or percent (when multiplied by 100).
         //         determine larger value between 0 and offsetXPercent and set larger value to setoffsetXPercent
         //         determine smaller value between 1 and offsetXPercent and set smaller value to setoffsetXPercent
         //         Math.max and Math.min will force the number to be between 0 and 1 in case it wasn't.
         //         Return offsetXPercent value (decimal value between 0 and 1).
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
                 
                 
                 // percentString: A function that calculates a percent based on the value and
                 //                     maximum value of a seek bar.
                 //     Gets value which was the location on seek bar where user clicked (0 to 100). Assign to "value".
                 //     Get max which is 100 and assign to "max".
                 //     value (0-100) divided by max (100) gets number between (0-1) then multiply by 100. Assign to "percent"
                 //     now we're back to where we started!
                 //     return a string which is the value between 0 and 100 plus the % symbol.
                 var percentString = function () {
                     var value = scope.value;
                     var max = scope.max;
                     var percent = value / max * 100;
                     return percent + "%";
                 };
                 
                 
                 //fillStyle: Returns the width of the seek bar fill element based 
                 //        on the calculated percent of the location where user clicked on seek-bar div element
                 scope.fillStyle = function() {
                     return { width: percentString() };
                 };
                 
                 //thumbStyle: Returns the location from the LEFT of the seek bar fill circle based 
                 //        on the calculated percent of the location where user clicked on seek-bar div element
                 scope.thumbStyle = function() {
                     return { left: percentString() };
                 };                 
                 
                 
                 // onClickSeekBar function: When user clicks on the SEEK BAR div element:
                 //     run calculatePercent function: determine location between 0 and 1. Assign to "percent".
                 //     multiply "percent" location by max (100) for a percent. Assign to "value".
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
                 //     the code scope.$apply(function() {...}); will move the bar and 
                 //                 circle along with the mouse as it is dragged. Without this 
                 //                 code the bar and circle will only move once mouse button released
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