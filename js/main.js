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

