jQuery(function($) {
	$('.back').on('click', function(e) {
		e.preventDefault();
		window.history.go(-1);
	});
	var waitingTpl = '<div class="waiting">\
						<div class="container">\
							<div class="row">\
								<div class="col-md-6 col-md-offset-3">\
									<div class="alert alert-info">\
										<h1>commiting, please wait.</h1>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>';

	$(document).on('click', '.btn-commit', function(e) {		
		// $('body').prepend(waitingTpl);
	});
});