$(document).ready(function($){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider__nav-thumbnails',
  });

  $('.slider__nav-thumbnails').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    focusOnSelect: true
  });

  //remove active class from all thumbnail slides
  $('.slider__nav-thumbnails .slick-slide').removeClass('slick-active');

  //set active class to first thumbnail slides
  $('.slider__nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider__nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider__nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
})(jQuery);
