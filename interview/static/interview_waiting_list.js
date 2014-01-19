jQuery(function ($) {	
	$('.info-list').on('click', 'tr[data-href]', function(e) {		
		window.location = $(this).data('href');
	});
});