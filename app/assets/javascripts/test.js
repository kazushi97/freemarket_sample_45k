$(function() {
  $("#category li,#bland li").hover(function() {
    $(this).children('ul').show();
  }, function() {
    $(this).children('ul').hide();
  });
});
