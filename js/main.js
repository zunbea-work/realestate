// ハンバーガー
$("#js-hamburger").click(function () {
  $(".hamburger").toggleClass("is-active");
  $(".header-menu").toggleClass("is-open");
  $("#js-overlay").toggleClass("is-open");
});
$("#js-overlay").click(function () {
  $(".hamburger").removeClass("is-active");
  $(".header-menu").removeClass("is-open");
  $("#js-overlay").removeClass("is-open");
});

// モーダル
let scrollY;

$(function(){
  $(".modal-open").on("click", function(e) {
    e.preventDefault();

    scrollY = $(window).scrollTop();

    $("body").css({
      position: "fixed",
      top: -scrollY + "px",
      width: "100%"
    });

    const modalId =$(this).data("modal");
    $("#modal-" + modalId).addClass("active");
  });

  $(".modal-container").on("click", function() {
    $(this).removeClass("active");

    $("body").css({
      position: "",
      top: "",
      width: ""
    });

    $(window).scrollTop(scrollY);
  });

  $(".modal-close").on("click", function() {
    $(".modal-container").removeClass("active");

    $("body").css({
      position: "",
      top: "",
      width: ""
    });

    $(window).scrollTop(scrollY);
  });

  $(".modal-body").on("click", function(e) {
    e.stopPropagation();
  });
});

// FVスクロール
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