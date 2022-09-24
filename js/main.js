$(document).ready(() => {
  $('#search-dropdown').dropkick();


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

  var rangeInput2 = document.querySelector('.js-price-range-slider-2');

  noUiSlider.create(rangeInput2, {
    start: [ WGR.filterPriceRangeMin, WGR.filterPriceRangeMax ],
    connect: true,
    behaviour: 'snap',
    cssPrefix: 'range-slider-',
    range: {
      'min': [ WGR.filterPriceRangeMin ],
      'max': [ WGR.filterPriceRangeMax ]
    }
  });

  //View
  let productsGrid = document.querySelector('.main-products__grid');
  let productsList = document.querySelector('.main-products__list');
  let gridBtn = document.querySelector('.view-grid');
  let listBtn = document.querySelector('.view-list');

  listBtn.addEventListener('click', function() {
    productsList.style.display = "flex";
    productsGrid.style.display = "none";
    gridBtn.classList.remove("view-active");
    listBtn.classList.add("view-active");
  });
  gridBtn.addEventListener('click', function() {
    productsList.style.display = "none";
    productsGrid.style.display = "grid";
    listBtn.classList.remove("view-active");
    gridBtn.classList.add("view-active");
  });

  //Filters
  const openBtn = document.querySelector(".filter-adaptive");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.querySelector(".main-filter");

  openBtn.addEventListener("click", function () {
    sidebar.classList.add("show-filter");
  });
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-filter");
  });

  $('.bestSlider__body').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow: '<a href="javascript://" class="sliderArrow sliderArrow--prev"><span class="icon-arrow"></span></a>',
    nextArrow: '<a href="javascript://" class="sliderArrow sliderArrow--next"><span class="icon-arrow"></span></a>',
    responsive: [
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
          appendArrows: $('.bestSlider__arrows'),
          centerMode: false,
        }
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
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
    ]
  })

  $('.faqBlock__heading').click(function(){
    $(this).closest('.faqBlock__item').children('p').slideToggle();
    $(this).children('.faqBlock__plus').toggleClass('faqBlock__plus--minus');
  })

})