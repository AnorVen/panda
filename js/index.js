$(document).ready(function () {
  console.log('ready');

  $('#slider').owlCarousel(
    {
      items: 1,
      loop: true,
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
    autoplayHoverPause: true,
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 2
      },
      540: {
        items: 3
      },
      992: {
        items: 4
      }
    }

  });
  $('.our-team__list').owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    lazyLoad: true,
    dots: false,
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 2
      },
      540: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  $('.slider').owlCarousel(
    {
      items: 1,
      loop: true,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      margin: 50,
      center: true,

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
    $('html, body').animate({scrollTop: $(this).offset().top}, 500);
  })



  $( ".cross" ).hide();
  $( ".mobile-nav__list" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".mobile-nav__list" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".mobile-nav__list" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});