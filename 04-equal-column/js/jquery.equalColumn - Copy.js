/*
  jQuery equalColumn Plugin
*/

(function($){
  "use strict";
  $.fn.equalColumn = function(options){
    
    //set default options
    var defaults = {
      padLeft: 0
    };
    
    //call in the default otions
    var options = $.extend(defaults, options);

    return this.each(function(options){
      var
        $item,
        itemLen = 0,
        rows = 4;
    
      // call and set object to be equal Height
      function setHeightBox(){
        
        $(this).each(function(index, el) {
          $item = $(this).find('li');
          itemLen = $item.length;

          for( var i = -1, len = Math.ceil( itemLen / rows); ++ i < len; ){
            var itemArray = [];
            for(var j = -1; ++ j < rows;){
              itemArray.push( i * rows + j );
            }
            setItemColumn(itemArray);
          }
        });

      }

      /// set and check Max Height and add equal item
      function setItemColumn(itemNum){
        var txtMaxHeight = 0;
        for( var i = 0; i < itemNum.length; i++){
          txtMaxHeight = $item.eq(itemNum[i]).height() > txtMaxHeight ? $item.eq(itemNum[i]).height() : txtMaxHeight;
        }
        for(i = 0; i < itemNum.length; i++){
          $item.eq(itemNum[i]).height(txtMaxHeight);
        }
      }

    });

  };
})(jQuery);
