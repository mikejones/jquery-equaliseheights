/* jQuery Equalize Heights 
 * Version 0.1 (29/03/2010)
 * Written by Michael Jones (mail@michaeljon.es)
 * @requires jQuery v1.4
 *
 * Copyright 2007-2009 Michael Jones 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * @description Equalise the heights of li elements in a list. This is done on row basis. 
 *
 * @example $('ul#list').equaliseHeights();
 * @desc Equalise the heights of each li 
 *
 */

(function($) {
  $.fn.equaliseHeights = function() {
    var max = function(arr) {
      var max = arr[0];
      var len = arr.length;
      for (var i = 1; i < len; i++) if (arr[i] > max) max = arr[i];
      return max;
    }
    return this.each(function() {
      var $listItems = $(" > li", this);
      
      for(var i = 0; i < $listItems.length; i++) {
        var item = $($listItems[i]);
        var rowTop = item.position().top;
        var row = [item];
        
        for(var j = i+1; j < $listItems.length; j++) {
          var nextItem = $($listItems[j])
          if(nextItem.position().top == rowTop) {
            row.push(nextItem)
            i++;
          }
          else
            break;
        }
        var maxHeight = max($.map(row, function(el) { return $(el).height(); }));
        $listItems.slice(i,j).css('height', maxHeight + "px");
        i = j-1;
      }
    });
  }
})(jQuery);
  
