

var carouselWidth = $('carousel-inner')[0].scrollWidth;
var width = $('carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function () {
  scrollPosition = scrollPosition + width;

  $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
})

