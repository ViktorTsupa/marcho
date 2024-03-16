$(function () {

  $('.shop-content__btn').on('click', function () {
    $(this).addClass('.active-icon')
    $('.shop-content__btn').removeClass('.active-icon');
  });

  $('.button-list').on('click', function () {
    $('.products-card').addClass('products-card--list');
  });

  $('.button-grid').on('click', function () {
    $('.products-card').removeClass('products-card--list');
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

  $(".products-card__stars").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
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