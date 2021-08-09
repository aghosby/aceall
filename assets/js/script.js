// JavaScript Document

$(document).ready(function() {

	var d = $('.header');
	d.scrollToFixed({
		zIndex: 999
	});

	$(window).scroll(function () {
		scroll = $(window).scrollTop();
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			if (scroll >= 50) d.addClass('smheader');
			else d.removeClass('smheader');
		} else {
			if (scroll >= 80) d.addClass('smheader');
			else d.removeClass('smheader');
	    }	
	});


	$("body").delegate(".ic", "click", function (e) {
		e.stopPropagation();
		var c = $(this).parents(".feedbk-hld"),
			m = c.find('.details');
		$(".feedbk .details").not(m).slideUp(1000);
		m.slideToggle(1000);
		$(this).find(".fa-chevron-down").toggleClass('sh');
	});


	$('.counter').counterUp({
		delay: 10,
		time: 10000
	});
    

	$(".menu_icon").click(function(e){
		e.preventDefault();
        $(".menu").animate({
            height: "toggle"
    });
	($(".menu_text").text() === "CLOSE") ? $(".menu_text").text("MENU") : $(".menu_text").text("CLOSE");
    });    

	$(".menubtn").on("click", function() {
		$(this).toggleClass('is_active');
		$('.menu').slideToggle('fast');
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

