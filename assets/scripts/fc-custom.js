jQuery(function ($) {

	$(function(){
		$('#slide-head.carousel').carousel({
			interval: 2000,
			pause: false
		});
	});

	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	$("a.preview").prettyPhoto({
		social_tools: false
	});

	window.scrollReveal = new scrollReveal();
});