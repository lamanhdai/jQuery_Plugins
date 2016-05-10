;(function($, win){
  'use strict';

  var TopPage = $.toppage = (function() {
    var
      $win = null,
      $search_form = null,

      UA,
      isIELegacy = false;

    function init(){
      $win = $(win);
      
      UA = navigator.userAgent;
      if(UA.indexOf('MSIE 8.') != -1 || UA.indexOf('MSIE 7.') != -1 || UA.indexOf('MSIE 6.') != -1) {
        isIELegacy = true;
      }


      $search_form = $('#search');
      if( isIELegacy ){
        placeholder();
      }
    }

    /**
     * Place holder
     * 
     */
    function placeholder() {
      if($search_form.attr("value") !== ""){
        return;
      }
      searchText = $search_form.attr("placeholder");
      $search_form.removeAttr("placeholder");
      $search_form.val( searchText );
      $search_form.css("color", "#999999");
  
      $search_form
        .focus( function() {
          if( $(this).val() === searchText )  {
             $(this).val("");
             $(this).css("color", "#000000");
          }
        })
        .blur( function() {
           if( $(this).val() === "" ) {
            $(this).val( searchText );
            $(this).css("color", "#999999");
          }
        });
        
      $("[type='submit']").on("mouseup", function(e){
        var $this_text = $(this).closest("form").find("[type=text]");
          if( $this_text.val() === searchText ){
          $this_text.val("");
        }
      });
    }

    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);