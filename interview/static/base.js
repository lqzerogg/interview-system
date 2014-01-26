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

	/*有自动完成的功能的字段验证*/
	$.validator.addMethod("checkInList", function(value, element) {
	    var value = $(element).prop('value'),
			map = $(element).data('source');

		if($(element).hasClass('check-in-list') && !map[value]) {
			return false;
		}else {
			return true;
		}
	}, "not a valid value");	
	$.validator.addClassRules("check-in-list", {
	  	'checkInList': true
	});
	$('form').validate({
		submitHandler: function(form) {	   	
	 		form.submit();
			$('body').prepend(waitingTpl);
		}
	});

	/*自动完成功能的添加*/
	$('input[data-provide="typeahead"]').each(function() {
		var map = $(this).data('source'),
			sourceArray = [];
		$.each(map, function(key) {
			sourceArray.push(key);
		});
		$(this).typeahead({
			source: sourceArray,
			updater: function(item) {
				this.$element.closest('.form-group').find('[type="hidden"]').prop('value', map[item]);
				return item;
			}
		});
	});	
});