$("#js-hamburger").click(function () {
  $(".hamburger").toggleClass("is-active");
  $(".header-menu").toggleClass("is-open");
});

$(function(){
  $(".modal-open").on("click", function(e) {
    e.preventDefault();

    const modalId =$(this).data("modal");
    $("#modal-" + modalId).addClass("active");
  });

  $(".modal-container").on("click", function() {
    $(this).removeClass("active");
  });

  $(".modal-close").on("click", function() {
    $(".modal-container").removeClass("active");
  });

  $(".modal-body").on("click", function(e) {
    e.stopPropagation();
  });
});

var goTop = $("#fas-area");

goTop.hide();

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    goTop.fadeIn(300);
  } else {
    goTop.fadeOut(300);
  }
});

goTop.click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 500);
  return false;
});