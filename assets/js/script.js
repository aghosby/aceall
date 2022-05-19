// JavaScript Document

$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		nav: true,
		loop:true,
		margin: 80,
		autoplay:true,
		slideBy: 2,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			768:{
				items:2
			}
		}
	});


	var d = $('.testdiv');
	$(window).scroll(function () {
		scroll = $(window).scrollTop();
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			if (scroll >= 50) d.addClass('sm');
			else d.removeClass('sm');
		} else {
			if (scroll >= 20) d.addClass('ready');
			else d.removeClass('ready');
	    }	
	});
	
	/*

	let tlMenu = gsap.timeline({
		paused: true,
		yoyo: true,
		defaults: { duration: 1, ease: "power4.inOut" }
	});

	let tl = gsap.timeline({
		defaults: { duration: 1, ease: "power4.inOut" }
	});

	tl.to('.major', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, duration: 2 });

	tlMenu.to(".menu .nav ul li a", { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: "1", stagger: .4, duration: 1});

	const changeState = document.getElementById("changeState");
	changeState.addEventListener('click', () => {
		tlMenu.reversed() ? tlMenu.reverse() : tlMenu.play()
	})
	*/


	const btn = document.querySelector('.menu-burger');
	const icon = document.querySelector('.menu-icon');
	const brand = document.querySelector('.brandname');
	const mini = document.querySelector('.mini-menu');
	const hdr = document.querySelector('.header');
	let menuOpen = false;

	$(".menu-icon").click(function(e) {
		e.preventDefault();
		//$(".menu").toggleClass('open');
        $(".menu").fadeToggle('slow');
	    ($(".menu-icon .text").text() === "CLOSE") ? $(".menu-icon .text").text("MENU") : $(".menu-icon .text").text("CLOSE");

		if(!menuOpen) {
			btn.classList.add('open');
			icon.classList.add('in-view');
			icon.classList.add('wht');
			brand.classList.add('wht');
			mini.classList.add('wht');
			hdr.classList.remove('sm');
			menuOpen = true;
		}
		else {
			btn.classList.remove('open');
			icon.classList.remove('in-view');
			icon.classList.remove('wht');
			brand.classList.remove('wht');
			mini.classList.remove('wht');
			menuOpen = false;
		}
    });    

	/*
	var d = $('.header');
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
	*/

	$('.flexslider').flexslider({
		animation: "fade",
		controlNav: true,
		animationSpeed: 4000,
		directionNav: true
	});


	var $animation_elements = $('.js-anime');
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

	new fullpage('#fullpage', {
		autoScrolling: true,
		navigation: true,
	})
	
		
});

