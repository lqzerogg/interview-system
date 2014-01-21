jQuery(function($) {
	var fieldsTpl = '<div class="wrapper none">\
						{{#fields}}\
							<div class="form-group">\
								<label for="{{label}}" class="col-sm-2 control-label">{{text}}</label>\
								<div class="col-sm-10">\
									{{#isInput}}\
										<input formnovalidate="formnovalidate" {{#required}}required="required"{{/required}} type="{{type}}" class="form-control {{label}}" name="{{name}}" placeholder="{{placeHolder}}">\
									{{/isInput}}\
									{{#isSelect}}\
										<select name="{{name}}" {{#required}}required="required"{{/required}} class="{{label}} form-control">\
									      	{{#options}}\
										      	<option value="{{value}}">{{text}}</option>\
									      	{{/options}}\
								    	</select>\
									{{/isSelect}}\
									{{#isTextArea}}\
										<textarea {{#required}}required="required"{{/required}} name="{{name}}" rows="5" class="{{label}}" form-control placeholder="{{placeHolder}}"></textarea>\
									{{/isTextArea}}\
								</div>\
							</div>\
					   {{/fields}}\
					    <div class="form-group">\
						    <div class="col-sm-offset-2 col-sm-10">\
						    <button type="button" class="btn btn-danger delete-arrange">\
						      	<span class="glyphicon glyphicon-minus-sign"></span>\
						    	delete\
						    </button>\
						    </div>\
						</div>\
					</div>';			

	Mustache.parse(fieldsTpl);		

	$.fn.addArrange = function(filedsView) {
		/*添加面试安排*/
		this.each(function() {
			$(this).on('click', '.add-arrange', function(e) {
				e.preventDefault();
				var $panel = $('.arrange-panel');
				if($panel.find('.wrapper').size() >= 5) {
					alert('interview cannot be over 5 times.')
				}else {					
					$(Mustache.render(fieldsTpl, filedsView))
						.prependTo($panel.find('.panel-body'))
						.slideDown('fast');
				}
				
			})
			/*删除面试安排*/
			.on('click', '.delete-arrange', function(e) {
				e.preventDefault();
				if(confirm('Are you sure to delete it?')) {
					var $this = $(this)
					$this.closest('.wrapper').slideUp('fast', function() {
						$this.remove();
					});
				}		
			});			
		});		
	};
});