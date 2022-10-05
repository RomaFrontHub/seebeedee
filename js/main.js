$(document).ready(() => {
  $('#search-dropdown').dropkick();

  $('.click-modal').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(500);
    $('.popup').fadeIn(500);
    // $('html').addClass('no-scroll');
  });

  $('.close-popup').click(function() {
    $('.popup-bg').fadeOut(500);
    $('.popup').fadeOut(500);
    // $('html').removeClass('no-scroll');
  });

  $('.popup-bg').click(function() {
    $('.popup-bg').fadeOut(500);
    $('.popup').fadeOut(500);
  });

  $('.desc-adaptive').click(function() {
    $('.posts-table-two').slideToggle();
    $('.desc-adaptive__icon').toggleClass('click-icon');
  });

  if($(document).width() <= '720') {
    $('.menuDrop__heading').click(function() {
      $(this).closest('.menuDrop').children('.menuDrop__body').slideToggle();
    })
  }

  $('.header__toggler').click(function() {
    $('.mainMenu').addClass('mainMenu--open');
    $('.cover').addClass('cover--visible')
  })

  $('.mainMenu__toggler').click(function() {
    $('.mainMenu').removeClass('mainMenu--open');
    $('.cover').removeClass('cover--visible')
  })

  $('.header__searchToggler').click(function() {
    $('.searchBlock-wrapper').slideToggle();
  })

  $('.bestSlider__body').slick({
    slidesToShow: 4,
    arrows: true,
    fade: false,
    prevArrow: '<a href="javascript://" class="sliderArrow sliderArrow--prev"><span class="icon-arrow"></span></a>',
    nextArrow: '<a href="javascript://" class="sliderArrow sliderArrow--next"><span class="icon-arrow"></span></a>',
    responsive: [
      // {
      //   breakpoint: 1430,
      //   settings: {
      //     slidesToShow: 4,
      //     appendArrows: $('.bestSlider__arrows')
      //   }
      // },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          appendArrows: $('.bestSlider__arrows')
        }
      },

      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          appendArrows: $('.bestSlider__arrows')
        }
      },

      // {
      //   breakpoint: 512,
      //   settings: {
      //     slidesToShow: 1,
      //     appendArrows: $('.bestSlider__arrows'),
      //     centerMode: true,
      //   }
      // },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          dotsClass: "my-dots",
          appendArrows: $('.bestSlider__arrows'),
          centerMode: false,
        }
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          dots: true,
          dotsClass: "my-dots",
          appendArrows: $('.bestSlider__arrows'),
          centerMode: false,
        }
      }
    ]
  })


  $('.revSlider__body').slick({
    slidesToShow: 2,
    arrows: true,
    prevArrow: '<a href="javascript://" class="sliderArrow sliderArrow--prev"><span class="icon-arrow"></span></a>',
    nextArrow: '<a href="javascript://" class="sliderArrow sliderArrow--next"><span class="icon-arrow"></span></a>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          appendArrows: $('.revSlider__arrows')
        }
      },

      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          appendArrows: $('.revSlider__arrows')
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          dotsClass: "my-dots-two",
          // centerMode: true,
          appendArrows: $('.revSlider__arrows')
        }
      },
    ]
  })

  $('.faqBlock__heading').click(function(){
    $(this).closest('.faqBlock__item').children('p').slideToggle();
    $(this).children('.faqBlock__plus').toggleClass('faqBlock__plus--minus');
  });
});