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
	$('.tooltip').tooltipster();
});	

