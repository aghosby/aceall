$(document).ready(function() {
	"use strict";

    $('.flexslider').flexslider({
		animation: "fade",
		controlNav: false,
		animationSpeed: 3000,
		directionNav: true
	});

	/*$(window).scroll(function(){ 
        if ($(this).scrollTop() > 1200) { 
            $('#scroll').fadeIn(1000); 
        } else { 
            $('#scroll').fadeOut(1000); 
        } 
	});
	*/


	$(".menu_icon").click(function(e){
		e.preventDefault();
		$(".menu_wrap").fadeToggle(700);
		$(".menu_wrap").toggleClass("open");
	});
	
	$('.scroll_click').on("click",function(){
        $(".menu_wrap").fadeToggle(700);
		$(".menu_wrap").toggleClass("open");
    });
	
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		
		var d = $('.header');
		if (scroll >= 70) d.addClass('smheader');
		else d.removeClass('smheader');
	});

	$("body").delegate(".ic", "click", function (e) {
		e.stopPropagation();
		var c = $(this).parents(".car_hld"),
			m = c.find('.car_det');
		$(".car_hld .car_det").not(m).slideUp(1000);
		m.slideToggle(1000);
	});
	
	var $animation_elements = $('.-js_anime');
	var $window = $(window);
	
	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
		
		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
			
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		});
	}
	
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});