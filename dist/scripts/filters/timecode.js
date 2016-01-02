 (function() {
     function timecode() {
         //change string to a number
         //if seconds is not a number (at page load when no song is playing) then return '-:--' text
         //round down seconds to an integer. assign to 'wholeSeconds'
         //divide seconds integer by 60 then round down for integer of minutes
         //divide seconds integer by 60. assign the remainder to remainingSeconds
         //assign output as minutes integer plus colon symbol
         //add a leading 0 if remainingSeconds is between 0 and 9 so 4min9sec will be shown as 4:09
         //add remainingSeconds
         //return the time in m:ss format
         return function(seconds) {
             var seconds = Number.parseFloat(seconds);
             
             if (Number.isNaN(seconds)) {
                 return '-:--';
             }
             
             var wholeSeconds = Math.floor(seconds); 
             var minutes = Math.floor(wholeSeconds / 60); 
             var remainingSeconds = wholeSeconds % 60; 
 
             var output = minutes + ':';
 
             if (remainingSeconds < 10) {
                 output += '0';   
             }
 
             output += remainingSeconds;
             return output;
         };
     }
 
     angular
         .module('blocJams')
         .filter('timecode', timecode);
 })();

//Unlike services, we do not need to inject a filter as a dependency unless we use it within the code of an Angular component, such as a service, directive, or controller. For Bloc Jams, we'll use the filter in the html view only, and therefore won't need to inject it as a dependency anywhere.