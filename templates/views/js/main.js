$( document ).ready(function() {

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".header-menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".header-menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

	$(".header-menu__list").on("click", "a", function(e) {
		var topOffset = 100;
		var title = $(this).attr('title'),
			id = '#' + title,
			top = $(id).offset().top - topOffset,
			parent = $(this).parents('ul');
		if (title) e.preventDefault();
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
});	

