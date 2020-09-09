
$(function () {
	
	/* Fixed Header */
	let header = $("#header"); 
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("nav");
	let nav_toggle = $("#nav_toggle");
	
	checkScroll(scrollPos, introH);
	
	$(window).on("scroll", function() {
		 introH = intro.innerHeight();
		 scrollPos = $(this).scrollTop();
        
		 checkScroll(scrollPos, introH);	
	});
	
	
	function checkScroll(scrollPos, introH) {
        if( scrollPos >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
	
	
	/* Smooth scroll */	
	$("[data-scroll]").on("click", function(event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();
		
		let $this = $(this);
		// получем идентификатор блока из атрибута data-scroll
		let blockId = $(this).data('scroll');
		// находим высоту, на которой расположен блок
		let blockOffset = $(blockId).offset().top;
		
		nav.removeClass("active");
		nav_toggle.removeClass("active");
	
		$("#nav a").removeClass("active");
		$this.addClass("active");
		
		
		 // анимируем переход к блоку, время: 500 мс
		$("html, body").animate({scrollTop: blockOffset}, 500);
	});
	
	

	/* Menu nav toggle */
	nav_toggle.on("click", function(event) {
		event.preventDefault();
		
		$(this).toggleClass("active");
		nav.toggleClass("active");
	});
	
	
	/* Collapse */
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		
		let $this = $(this);
		let blockId = $(this).data('collapse');
		
		$(this).toggleClass("active");
		
	});
	
	
	/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
  		slidesToShow: 1,
  		slidesToScroll: 1
	});
	

});








