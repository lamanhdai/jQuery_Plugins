;(function($, win){
  'use strict';

  var TopPage = $.toppage = (function() {
    var
      $win = null,
      UA,
      isIELegacy = false;

    function init(){
      $win = $(win);
      UA = navigator.userAgent;
      
      if(UA.indexOf('MSIE 8.') != -1 || UA.indexOf('MSIE 7.') != -1 || UA.indexOf('MSIE 6.') != -1) {
        isIELegacy = true;
      }
      smoothScroll();
    }

    /**
     * smoothScroll
     */
    function smoothScroll() {
      $('#backtop a, .backtop a').on("click", function(event){
        event.preventDefault();
        var h = $(this).attr("href");
        var t = $(h == "#" || h === "" ? 'body' : h);
        var p = t.offset().top;
        $('html,body').animate({
            scrollTop: p
        }, 500);
        return false;
      });
    }

    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);