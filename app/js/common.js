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


$(".question__btn--next").click(function(){
    $('.question').css({"display" : "none"});
    $(this).parent().next(".question").css({'display' : 'block'});
    // $(this).css({'display' : 'block'});
});

});