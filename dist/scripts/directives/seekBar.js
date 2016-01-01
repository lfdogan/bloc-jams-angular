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
             scope: { onChange: '&' }, /* To make sure the directive evaluates the attribute, we'll attach it to the directive's scope, rather than the attribute's object. Scoping the attribute allows us the flexibility to specify how we want to handle the value passed to the on-change attribute. The & in the isolate scope object is a type of directive scope binding. The three types of directive scope bindings (@, =, &) allow us to treat the value of the given attribute differently. The & binding type provides a way to execute an expression in the context of the parent scope.*/
             link: function(scope, element, attributes) {
                 
                 /*Holds the value of the seek bar, such as the currently 
                 playing song time or the current volume. Default value is 0.
                 */
                 scope.value = 0;
                 /* Holds the maximum value of the song and volume seek 
                 bars. Default value is 100.
                 */
                 scope.max = 100;
                 
                 
                 /*Holds the element that matches the directive (<seek-bar>) as a 
                      jQuery object so we can call jQuery methods on it.
                      */
                 var seekBar = $(element);
                 
                 
                 /* To monitor the value changes of these attributes in a manner specific to 
                 this directive, we have to "observe" them. We can notify the directive of all 
                 changes to attribute values by using the $observe method on the Angular 
                 attributes object. 
                 This code observes the values of the attributes we declare in the HTML by 
                 specifying the attribute name in the first argument. When the observed 
                 attribute is set or changed, we execute a callback (the second argument) 
                 that sets a new scope value (newValue) for the scope.value and scope.max 
                 attributes. We use the directive's scope to determine the location of the seek (status)
                 bar thumb (circle), and correspondingly, the playback position of the song.
                 */
                 attributes.$observe('value', function(newValue) { scope.value = newValue; });
                 attributes.$observe('max', function(newValue) { scope.max = newValue;  });
                 
                 
                 /* percentString: A function that calculates a percent based on the value and
                                      maximum value of a seek bar.
                      Gets value which was the location on seek bar where user clicked (0 to 100). Assign to "value".
                      Get max which is 100 and assign to "max".
                      value (0-100) divided by max (100) gets number between (0-1) then multiply by 100. Assign to "percent"
                      now we're back to where we started!
                      return a string which is the value between 0 and 100 plus the % symbol.
                 */
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
                 /* We need to pass the updated value to the onChange attribute. To do so, we'll write 
                 a function to call in the onClickSeekBar and trackThumb methods that will send the 
                 updated scope.value to the function evaluated by onChange: */
                 scope.onClickSeekBar = function(event) {
                     var percent = calculatePercent(seekBar, event); //custom function
                     scope.value = percent * scope.max;
                     notifyOnChange(scope.value); //custom function
                 };
                 
                 
                 //Similar to scope.onClickSeekBar, but uses $apply to constantly apply the change 
                 //     in value of scope.value as the user drags the seek bar thumb.
                 //     with Angular, $document must be injected as a dependency to use it so 
                 //     it needs to be added as a dependency to the this seekBar directive.
                 //     the code scope.$apply(function() {...}); will move the bar and 
                 //                 circle along with the mouse as it is dragged. Without this 
                 //                 code the bar and circle will only move once mouse button released
                 /* We need to pass the updated value to the onChange attribute. To do so, we'll 
                 write a function to call in the onClickSeekBar and trackThumb methods that will 
                 send the updated scope.value to the function evaluated by onChange: */
                 scope.trackThumb = function() {
                     $document.bind('mousemove.thumb', function(event) {
                         var percent = calculatePercent(seekBar, event); //custom function
                         scope.$apply(function() {
                             scope.value = percent * scope.max;
                             notifyOnChange(scope.value); //custom function
                         });
                     });
                     $document.bind('mouseup.thumb', function() {
                         $document.unbind('mousemove.thumb');
                         $document.unbind('mouseup.thumb');
                     });
                 };

                 
                 /* We name the function notifyOnChange because its purpose 
                 is to notify onChange that scope.value has changed. 
                 Function called from trackThumb and onClickSeekBar.
                 1. We test to make sure that scope.onChange is a function. If a 
                 future developer fails to pass a function to the on-change attribute 
                 in the HTML, the next line will not be reached, and no error will be thrown.
                 2. We pass a full function call to the on-change attribute in the 
                 HTML – scope.onChange() calls the function in the attribute.
                 3. The function we pass in the HTML has an argument (value) which 
                 isn't defined in the view (it's not the same as scope.value). 
                 Using built-in Angular functionality, we specify the 
                 value of this argument using hash syntax (curly braces). Effectively, we're 
                 telling Angular to insert the local newValue variable as the value 
                 argument we pass into the SongPlayer.setCurrentTime() function 
                 called in the view.
                 */
                 var notifyOnChange = function(something) {
                      if (typeof scope.onChange === 'function') {
                          scope.onChange({value: something});//onChange is an attribute that takes an expression to execute
                      }
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