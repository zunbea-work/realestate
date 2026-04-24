// ハンバーガー
$(function () {
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  })

  $('.header__nav ul li a').click(function() {
    $('.hamburger').removeClass('active');
    $('.header__nav').removeClass('active');
  })
});

// スクロールでヘッダー色変更
$(function () {

  $(window).on("load scroll resize",function() {
    const scrollTop = $(this).scrollTop();
    const aboutPos = $('#about').offset().top;

    const isPC = window.matchMedia("(min-width:768px)").matches;
    const offset = isPC ? 81 : 51;

    if(scrollTop > aboutPos - offset) {
      $('.header').addClass('change');
    } else {
      $('.header').removeClass('change');
    }
  });
});

// モーダル
let scrollY;

$(function () {
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

    $("html").css("scroll-behavior", "auto");
    $(window).scrollTop(scrollY);
    $("html").css("scroll-behavior", "");
  });

  $(".modal-close").on("click", function() {
    $(".modal-container").removeClass("active");

    $("body").css({
      position: "",
      top: "",
      width: ""
    });

    $("html").css("scroll-behavior", "auto");
    $(window).scrollTop(scrollY);
    $("html").css("scroll-behavior", "");
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

$(function () {
  AOS.init({
    once: true,
  });
});

'use strict';

// Splide
new Splide( '.splide',{
	autoplay: true,
	interval: 3000,
	speed: 2000,
	type: "loop",
	arrows: false,
	pagination: false,
} ).mount();