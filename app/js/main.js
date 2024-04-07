$(function () {

  $('.shop__filters-btn').on('click', function () {
    $('.shop__filters').slideToggle()
  });

  $('.footer__title-slide').on('click', function () {
    $(this).toggleClass('active');
    $(this).removeClass('.active');
    $(this).next('.footer__list').slideToggle();
  });


  $('.header__btn').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
    infinite: false,
  });

  $('.products-item__input').styler();

  $('.products-tab__top-item').on('click', function (e) {
    e.preventDefault();
    $('.products-tab__top-item').removeClass('products-tab__top-item--active');
    $(this).addClass('products-tab__top-item--active')

    $('.products-tab__content-item').removeClass('products-tab__content-item--active');
    $($(this).attr('href')).addClass('products-tab__content-item--active');
  })


  $('.products-slide__thumbs').slick({
    asNavFor: '.products-slide__main',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.products-slide__main').slick({
    asNavFor: '.products-slide__thumbs',
    draggable: false,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          draggable: true,
        }
      }
    ],
  });

  $('.shop-content__btn').on('click', function () {
    $(this).addClass('.active-icon')
    $('.shop-content__btn').removeClass('.active-icon');
  });

  $('.button-list').on('click', function () {
    $('.products-card').addClass('products-card--list');
    $('.shop-content__inner').addClass('shop-content__no-grid');
  });

  $('.button-grid').on('click', function () {
    $('.products-card').removeClass('products-card--list');
    $('.shop-content__inner').removeClass('shop-content__no-grid');
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  const buttons = document.querySelectorAll('.shop-content__btn');

  function handleClick(event) {
    buttons.forEach(button => {
      button.classList.remove('active-btn');
      button.querySelector('svg').classList.remove('active-icon');
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.add('active-btn');
    clickedButton.querySelector('svg').classList.add('active-icon');
  }

  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  });
});

$(function () {

  $(".stars").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></path></svg >'
  });

});

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);