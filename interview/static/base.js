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

	$('form').validate({
	  submitHandler: function(form) {	   	
	    form.submit();
	    $('body').prepend(waitingTpl);
	  }
	});

});