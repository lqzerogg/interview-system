jQuery(function ($) {
	$('.selecting-table').on('click', '.change-info', function(e) {
		e.preventDefault();		
		window.location = $(this).data('href');
	}).on('click', '.delete', function(e) {
		e.preventDefault();
		window.location = $(this).data('href');
	});
});