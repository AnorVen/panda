$(document).ready(function () {
  console.log('ready');

  $('#slider').owlCarousel(
    {
      items:1,
      loop:true,
      video: true,
      nav: true,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
    }
  );

$('.clients__list').owlCarousel({
  items: 4,
  loop: true,
  owl2row: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true

});
  $('.our-team__list').owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    lazyLoad: true,
    dots: false
  });
  $('.slider').owlCarousel(
    {
      items:1,
      loop:true,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      margin: 30,
    }
  );
  $('.smm-works__item .tab').hide();

  $('.smm-works__item').on('click', function () {
    console.log(this);
    $('.smm-works__item').removeClass('active');
    $('.smm-works__item .smm-works__prev').show();
    $('.smm-works__item .tab').hide();


    $(this).find('.tab').show();
    $(this).find('.smm-works__prev').hide();
    $(this).addClass('active');
    $('html, body').animate({ scrollTop: $(this).offset().top }, 500);
  })



});