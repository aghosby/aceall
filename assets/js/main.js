// JavaScript Document

jQuery(document).ready(function($) {
	
	var d = $('.header');
	$(".menu_icon").click(function(e){
		e.preventDefault();
		d.toggleClass('blue');
        $(".menu").fadeToggle('fast');
		($(".menu_text").text() === "CLOSE") ? $(".menu_text").text("MENU") : $(".menu_text").text("CLOSE");
    });    

	$(".menubtn").on("click", function() {
		$(this).toggleClass('is_active');
		$('.menu').slideToggle('fast');
	});

	
	d.scrollToFixed({
		zIndex: 999
	});

	$(window).scroll(function () {
		scroll = $(window).scrollTop();
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			if (scroll >= 50) d.addClass('sm');
			else d.removeClass('sm');
		} else {
			if (scroll >= 80) d.addClass('sm');
			else d.removeClass('sm');
	    }	
	});

	$('.flexslider').flexslider({
		animation: "fade",
		controlNav: true,
		animationSpeed: 4000,
		directionNav: true
	});


	$("body").delegate(".ic", "click", function (e) {
		e.stopPropagation();
		var c = $(this).parents(".srv-hld"),
			m = c.find('.details');
		$(".srv-hld .details").not(m).slideUp(1000);
		m.slideToggle(1000);
		$(this).find(".fa-chevron-down").toggleClass('sh');
	});


	$('.counter').counterUp({
		delay: 10,
		time: 10000
	});


	var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    
    $('.filter-button-group').on( 'click', 'button', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
    });
    

	
	
	
	
	$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  
	  if (target.length) {
        event.preventDefault();
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('html, body').animate({
          scrollTop: target.offset().top-100
        }, 3000);
		} else {
			$('html, body').animate({
          scrollTop: target.offset().top-130
        }, 3000);
	    }
		  return false;
        }
      }
    });
    
    
    
    
    var page_url = window.location.href;
	var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
	if ("page_id") {
	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$("html, body").animate({scrollTop: $("#" + page_id).offset().top-100}, 3000);
		} else {
			$("html, body").animate({scrollTop: $("#" + page_id).offset().top-130}, 3000);
	    }
	    
	};
			
});



