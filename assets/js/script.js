// JavaScript Document
$(document).ready(function() {
	_route();
	var d = $('.header');
	d.scrollToFixed({
		zIndex: 999
	});

	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false
	});

	
	$("body").delegate(".ic", "click", function (e) {
		e.stopPropagation();
		var c = $(this).parents(".car_hld"),
			m = c.find('.car_det');
		$(".car_hld .car_det").not(m).slideUp(800);
		m.slideToggle(800);
		$(this).find(".sp-1").toggleClass('sld');
        $(this).find(".sp-2").toggleClass('sld');
	});
	
	$(window).scroll(function () {
		scroll = $(window).scrollTop();
		
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			d.addClass('sh');
		} else {
			if (scroll >= 60) d.addClass('sh');
			else d.removeClass('sh');
		}
	});

    $(".menu_icon").click(function(e){
		e.preventDefault();
        $(".menu").animate({
            width: "toggle"
        });
		($(".menu_text").text() === "CLOSE") ? $(".menu_text").text("MENU") : $(".menu_text").text("CLOSE");
    });    
	$(".menubtn").on("click", function() {
		$(this).toggleClass('is_active');
		$('.menu').slideToggle('fast');
	});
		
	$("body").delegate(".ic", "click", function (e) {
		e.stopPropagation();
		var c = $(this).parents(".proj_hld"),
			m = c.find('.proj_det');
		$(".proj_hld .proj_det").not(m).slideUp();
		m.slideToggle();
	});
	
	
});

function _route() {
	"use strict";
	var hashTag = window.location.hash;
	var newPath = hashTag.replace("#/", "");
	var newArr = newPath.split("/");
	var pageID = newArr[0];
		
			if (pageID !== 'content') {
				var url = $(".avail_pos:first").attr("id");
			} else {
				var url = newArr[1];
		$('html, body').stop().animate({scrollTop: $("#offset").offset().top-140}, 500)
			}
				
		$("#content").load('careers_ajax.php?url=' + url);
}

