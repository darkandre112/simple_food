$(function () {

  $('.header__link').on('click', function () {
    $(this).addClass("header__link--active");
    $(".header__link").not(this).removeClass("header__link--active");
  });

  $('.category__button').on('click', function () {
    $(this).addClass("category__button--active");
    $(".category__button").not(this).removeClass("category__button--active");
  });

  var mixer = mixitup('.cards');


});

$(document).ready(function () {
  $('.reviews__items').slick({
    dots: true,
    arrows: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>'

  });
});