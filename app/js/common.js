$(document).ready(function(){

    // 	// Инициализируем главный слайдер
    $(".info__slider").owlCarousel({
      items:1,
      URLhashListener:true,
      autoplayHoverPause:true,
      dots:true,
      navContainer: ".info__slider",
      loop: true,
      nav: true,
      navText: ['<svg class="icon-svg icon-slider-arrow"><use xlink:href="#icon-svg-slider-arrow"></use></svg>', '<svg class="icon-svg icon-slider-arrow"><use xlink:href="#icon-svg-slider-arrow"></use></svg>'],
    });

    $('.header__dropdown-visible').customScroll({
     vertical: true,
     horizontal: false
   });

    $(".info__question").owlCarousel({
      items:1,
      URLhashListener:true,
      autoplayHoverPause:true,
      dots:false,
      loop: true,
      nav: false,
      animateOut: 'fadeOut',
    });


    var owl = $('.info__question');
    owl.owlCarousel();

    $('.slider__next').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.slider__prev').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
    });

    $(".video__slider").owlCarousel({
      items:1,
      URLhashListener:true,
      autoplayHoverPause:true,
      dots:false,
      loop: true,
      autoHeight:true,
      nav: false,
        // animateOut: 'fadeOut',
      });

    var owl2 = $('.video__slider');
    owl.owlCarousel();

    $('.video__btn-right').click(function() {
      owl2.trigger('next.owl.carousel');
    });
    $('.video__btn-left').click(function() {
      owl2.trigger('prev.owl.carousel', [300]);
    });
	// Инициализируем слайдер для превью товара
	$(".single__slider").each(function(){
		$(this).owlCarousel({
			items:1,
			dots: true,
			nav: true,
			loop: true,
			nav: true,
      navText: ['<svg class="icon-svg icon-slider-arrow"><use xlink:href="#icon-svg-slider-arrow"></use></svg>', '<svg class="icon-svg icon-slider-arrow"><use xlink:href="#icon-svg-slider-arrow"></use></svg>'],
    });
	});

    // 	// Инициализируем "быстрый просмотр" с помощью ajax
    $('.popup').magnificPopup();

	// Отображение ответов
	$('.info__present ').click(function () {
		$(this).parent(this).parent(this).parent(this).toggleClass('info__question--open');
	});

    // 	//Инициализируем мобильное mmenu

    $("#my-menu").mmenu({
      'navbar': {
       "title": "<p>Держи пять!</p>",
			// "titleLink": 'none'
		},
		extensions: {
			"all": ["theme-white", "pagedim-black", "border-none", "fx-menu-slide"],
			"(min-height: 600px)": ["listview-large"],
			"(min-height: 900px)": ["listview-huge"]
		}
	}, {
		offCanvas: {
			pageSelector: "#page"
		}
	});

    // Скролл к шапке в каталоге
    $('.autoscroll').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
      e.preventDefault();
    });

    $('.about .question__btn').on('click', function() {
      var aboutTop = $('.header').height();
      var bannerTop = $(".content__header-bg").height();
      window.scrollTo(aboutTop + bannerTop, aboutTop + bannerTop);
      // console.log($(this));
    });

    function imgSize(){
      if ($(window).width() <= '980'){
        var resizez = 754/469;
        var resizez3 = 912/642;
        $('.info__slider').height($('.info__slider').width() / resizez);
        $('.info__slider .owl-item').height($('.info__slide').width() / resizez);

        $('.video__block').height($('.video__block').width() / resizez3);
      } else {
        return false;
      }
    }

    $(window).on('load resize',imgSize);

    $(document).on('click', '.video__btn-play--3', function() {
      var $video = $('#main-video-3'),
      src = $video.attr('src');

      $video.attr('src', src + '&autoplay=1');
      $( ".video__block-play--3" ).fadeOut( "slow", function() {
        $( ".video__block-play--3" ).css({'display' : 'none'});
      });
    });

    $(document).on('click', '.video__btn-play--1', function() {
      var $video = $('#main-video-1'),
      src = $video.attr('src');

      $video.attr('src', src + '&autoplay=1');
      $( ".video__block-play--1" ).fadeOut( "slow", function() {
        $( ".video__block-play--1" ).css({'display' : 'none'});
      });
    });


    $(document).on('click', '.video__btn-play--2', function() {
      var $video = $('#main-video-2'),
      src = $video.attr('src');

      $video.attr('src', src + '&autoplay=1');
      $( ".video__block-play--2" ).fadeOut( "slow", function() {
        $( ".video__block-play--2" ).css({'display' : 'none'});
      });
    });

    $("#spinner")
  .spinner('delay', 200) //delay in ms
  .spinner('changed', function(e, newVal, oldVal) {
    // trigger lazed, depend on delay option.
  })
  .spinner('changing', function(e, newVal, oldVal) {
    // trigger immediately
  });

  $('.header__city--link-drop').mouseup(function(){
    if ($(".header__dropdown").hasClass("header__dropdown--hidden")) {
      $('.header__dropdown').removeClass("header__dropdown--hidden");
      $('.header__dropdown').css({"visibility" : "visible"});
    } else {
      $('.header__dropdown').addClass("header__dropdown--hidden");
      $('.header__dropdown').css({"visibility" : "hidden"});
    }
  });


  $("body").click(function (event) {
    if (($(event.target).closest(".header__dropdown").length === 0) && ($(event.target).closest(".header__city--link-drop").length === 0)) {
      $('.header__dropdown').addClass("header__dropdown--hidden");
      $('.header__dropdown').css({"visibility" : "hidden"});
    }
  });

  $('.single__column--right').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Изображение не может быть загружно.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });

  $(".question__label").click(function(){
    $(this).parent().find(".question__label").removeClass("question__label--selected");
    $(this).addClass('question__label--selected');
  });

  $("#datepicker input").datepicker({
    firstDay: 1,
    dateFormat: "dd-mm-yy",
    beforeShow: function (textbox, instance) {
     var txtBoxOffset = $(this).offset();
     var top = txtBoxOffset.top;
     var left = txtBoxOffset.left;
     var textBoxWidth = $(this).outerWidth();
     console.log('top: ' + top + 'left: ' + left);
     setTimeout(function () {
       instance.dpDiv.css({
                       top: top, //you can adjust this value accordingly
                       left: left//show at the end of textBox
                     });
     }, 0);

   }});

  $(".radio input[type='checkbox']").change(function(){
    $(this).parent().toggleClass('radio--active');
    if($(this).parent().hasClass('radio--active')) {
      $(this).parent().parent().find("input[type='text']").val("Нет");
      $(this).parent().find(".radio__btn").text("Нет");
    } else {
      $(this).parent().parent().find("input[type='text']").val("Да");
      $(this).parent().find(".radio__btn").text("Да");
    }
  });

  if($(".radio input[type='checkbox']").parent().hasClass('radio--active')) {
    $(this).parent().parent().find("input[type='text']").val("Нет");
    $(this).parent().find(".radio__btn").text("Нет");
  } else {
    $(this).parent().parent().find("input[type='text']").val("Да");
    $(this).parent().find(".radio__btn").text("Да");
  }

  $(".rateYo").rateYo({
    // spacing   : "5px",
    fullStar: true,
    starWidth: "19px",
    rating: 0,
    spacing: "6px",
    multiColor: {
      "startColor": "#00bcc9",
      "endColor"  : "#00FF00"
    }
  });

  $(".rateYo").click(function () {
    var $rateYo = $(this).rateYo();
    var rating = $rateYo.rateYo("rating");
    $(this).parent().find("input").val(rating);
  });

  $(".question__btn--no").click(function(){
    $('#question__work-with-work').css({"display" : "block"});
    $('#question__btn-start').css({"display" : "flex"});
    $('.hide-in-start').css({"display" : "none"});
    $('.question__btn--no').css({"display" : "none"});
    $('.question__btn--yes').css({"display" : "none"});
    $('.question__city').css({"display" : "block"});
    $('.question__city-discript').css({"display" : "none"});
    $('.question__city ul').css({"display" : "none"});
    $('.question__info').css({"display" : "none"});
  });

  $(".question__btn--yes").click(function(){
    $('.question__city').css({"display" : "block"});
    // $('#question__btn-start').css({"display" : "flex"});
    $('.question__btn--no').css({"display" : "none"});
    $(this).css({'display':'none'});
    $('.hide-in-start').css({"display" : "none"});
  });

  $(".question__btn-city-yes").click(function() {
    $(".question__answer-yes").css({"display" : "block"});
    $('.question__city-discript').css({"display" : "none"});
    $('.question__city ul').css({"display" : "none"});
    $('.question__info').css({"display" : "none"});
    $('#question__btn-start').css({"display" : "flex"});
  });

  $(".question__btn-city-no").click(function() {
    $("#question__work-with-work").css({"display" : "none"});
    // $('.question__city-discript').css({"display" : "none"});
    $('.question__city-discript--bottom').css({"display" : "block"});
    $('.question__city ul').css({"display" : "none"});
    $('.question__info').css({"display" : "none"});
    $('#question__btn-start').css({"display" : "flex"});
  });

  $("#question__btn-start").click(function(){
    $('.question').css({"display" : "none"});
    $(this).parent().parent().next(".question").css({'display' : 'block'});
  });

  $(".question__btn--next").click(function(){
    $('.question').css({"display" : "none"});
    $(this).parent().next(".question").css({'display' : 'block'});
    // $(this).css({'display' : 'block'});
  });

  $(".question__btn--final").click(function(){
    var mainText = $('.test__article--4 input:checked').val();
    var result1 = $('.test__article--1 input:checked').val();
    var result2 = $('.test__article--2 input:checked').val();

    $(".question__h1").text(mainText);
    if(((result1 == "city-1") || (result1 == "city-2")) && (result2 == "time1")) {
      $("#question__result-inner-1").text("35 000");
      $("#question__result-inner-2").text("19 000");
    } else if (((result1 == "city-1") && (result2 == "time2")) || ((result1 == "city-2") && (result2 == "time2")) || ((result1 == "city-3") || (result1 == "city-4")) && (result2 == "time1")) {
      $("#question__result-inner-1").text("55 000");
      $("#question__result-inner-2").text("30 000");
    } else if (((result1 == "city-1") && (result2 == "time3")) || ((result1 == "city-2") && (result2 == "time3")) || ((result1 == "city-3") && (result2 == "time2")) || ((result1 == "city-4") && (result2 == "time3")) || ((result1 == "city-5") && (result2 == "time1"))) {
      $("#question__result-inner-1").text("75 000");
      $("#question__result-inner-2").text("41 000");
    } else if (((result1 == "city-3") && (result2 == "time3")) || ((result1 == "city-4") && (result2 == "time3")) || ((result1 == "city-5") && (result2 == "time2"))) {
      $("#question__result-inner-1").text("95 000");
      $("#question__result-inner-2").text("51 000");
    } else {
      $("#question__result-inner-1").text("110 000");
      $("#question__result-inner-2").text("60 000");
    }
  })

});
