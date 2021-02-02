$(function () {

  $('.slider-product__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  });

  $('.partners__slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  });



  var containerEl1 = document.querySelector('[data-ref="products-week"]');
  var containerEl2 = document.querySelector('[data-ref="new-design"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});