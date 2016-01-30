(function($){
//hotkeys
$(function() {
  var firstmove = true;
    $(document).bind('keydown', 'ctrl+l', function(){      
window.location.reload() ;
    })
  $('.move').click(function() {
    this.focus();
  });
});

})(jQuery);
