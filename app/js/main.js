$(function () {

  $('.header__link').on('click', function () {
    $(this).addClass("header__link--active");
    $(".header__link").not(this).removeClass("header__link--active");
  });

  $('.category__btn').on('click', function () {
    $(this).addClass("category__btn--active");
    $(".category__btn").not(this).removeClass("category__btn--active");
  });

  var mixer = mixitup('.cards');

});