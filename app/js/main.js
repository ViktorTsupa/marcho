$(function () {
  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
});

$(function () {

  $(".products-card__stars").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

});