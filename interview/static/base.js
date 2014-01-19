jQuery(function($) {
	$('.back').on('click', function(e) {
		e.preventDefault();
		window.history.go(-1);
	});
});