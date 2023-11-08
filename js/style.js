$(document).ready(function () {
  $("#navbar-toggle").click(function () {
    $("#responsive-menu-item").stop().slideToggle();
  });
  $(window).resize(function () {
    $("#responsive-menu-item").stop().slideUp();
  });
  $(window).scroll(function () {
    $("#responsive-menu-item").stop().slideUp();
  });

  $(".sub-menu").parent("li").addClass("has-child");
  $(".responsive-main-toggle").click(function () {
    $(this).toggleClass("open");
    $(this).next(".sub-menu").stop().slideToggle();
  });
  $(window).resize(function () {
    $(".sub-menu").slideUp();
  });
  $(window).scroll(function () {
    $(".sub-menu").slideUp();
  });
  $(".owl-carousel").owlCarousel({
    dots: false,
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
