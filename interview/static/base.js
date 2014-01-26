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
	/*$(document).on('submit', 'form', function() {
		var valid = true;
		$(this).find('.check-in-list').each(function() {
			var value = $(this).prop('value'),
				map = $(this).data('source');
			debugger
			if(!map[value]) {
				valid = false;
				// $(this).trigger('focus');
			}else {
				valid = true;
			}
		});
		return false;
	});*/
	$('form').each(function() {
		$(this).validate({
			submitHandler: function(form) {	   	
				/*由于validator的bug，验证addClassRules方法必须要有唯一的name才能够进行正确的验证，
				 *所以在表单提交的最后把验证用的，只是可读的input删除掉
				 */
				$(form).find('input[name*=for-validate]').remove();
		 		form.submit();
				$('body').prepend(waitingTpl);
			}
		});
	});

	/*自动完成功能的添加*/
	$('input[data-provide="typeahead"]').each(function() {
		var map = $(this).closest('.data-source').data('source'),
			sourceArray = [];
		$.each(map, function(key) {
			sourceArray.push(key);
		});
		$(this).data('source', map);
		$(this).typeahead({
			source: sourceArray,
			updater: function(item) {
				this.$element.closest('.form-group').find('[type="hidden"]').prop('value', map[item]);
				return item;
			}
		});
	});	
});