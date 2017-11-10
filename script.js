$(document).ready(function() {

  var navLinks = $('#nav-mobile > li > a');

  navLinks.on('click', function(e) {
    e.preventDefault();
    var target = $(e.target).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
    window.location.hash = target;
  });
});
