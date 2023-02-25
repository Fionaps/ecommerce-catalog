// set delay 0.6s
var delay = 600;
            
$(window).on('load', function() {
  setTimeout(function(){
     $("#loading").hide();
     $(".loader").hide();
  },delay);
});