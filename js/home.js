// RED BACKGROUND ON SCROLL ANIMATION

$(window).on("scroll touchmove", function() {
  if ($(document).scrollTop() >= $("#scroll1").position().top) {
    $('.red-background-wrapper').css('background', 'rgba(229, 36, 37, 0.3');
  };
  if ($(document).scrollTop() >= $("#scroll2").position().top) {
    $('.red-background-wrapper').css('background', 'rgba(229, 36, 37, 0.6)')
  };
  if ($(document).scrollTop() >= $("#scroll3").position().top) {
    $('.red-background-wrapper').css('background', 'rgba(229, 36, 37, 0.9)')
  };
});

// MOBILE/TABLET NAV MENU

$(document).ready(function() {
  $('.icon').click(function() {
    $(this).toggleClass('open');
    $('.menu-overlay').toggle();
    $('.menu-overlay').toggleClass('flex');
    $('.background').toggleClass('fixed');
  });
});