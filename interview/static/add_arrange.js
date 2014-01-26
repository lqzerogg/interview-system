jQuery(function($) {
	var fieldsTpl = '<div class="wrapper none">\
						{{#fields}}\
							<div class="form-group">\
								<label for="{{label}}" class="col-sm-2 control-label">{{text}}</label>\
								{{#isInput}}\
									<div class="col-sm-10">\
										<input formnovalidate="formnovalidate" {{#required}}required="required"{{/required}} type="{{type}}" class="form-control {{label}}" data-name="{{name}}" placeholder="{{placeHolder}}">\
									</div>\
								{{/isInput}}\
								{{#isDate}}\
									<div class="input-group date form-date col-sm-10" data-date-format="dd MM yyyy - HH:ii p" data-link-field="{{dateID}}" data-link-format="yyyy-mm-dd hh:ii">\
					                    <input class="form-control" size="16" type="text" value="" readonly>\
					                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>\
										<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>\
					                </div>\
									<input {{#required}}required="required"{{/required}} data-name="{{name}}" type="hidden" id="{{dateID}}" value="" />\
								{{/isDate}}\
								{{#isCheckInList}}\
									<div class="col-sm-10">\
										<input data-name="{{validateName}}" autocomplete="off" formnovalidate="formnovalidate" {{#required}}required="required"{{/required}} type="text" data-provide="typeahead" class="check-in-list form-control" placeholder="{{placeHolder}}">\
									</div>\
									<input {{#required}}required="required"{{/required}} type="hidden" class="none {{label}}" data-name="{{name}}" name="">\
								{{/isCheckInList}}\
								{{#isSelect}}\
									<div class="col-sm-10">\
										<select data-name="{{name}}" {{#required}}required="required"{{/required}} class="{{label}} form-control">\
									      	{{#options}}\
										      	<option value="{{value}}">{{text}}</option>\
									      	{{/options}}\
								    	</select>\
								    </div>\
								{{/isSelect}}\
								{{#isTextArea}}\
									<div class="col-sm-10">\
										<textarea {{#required}}required="required"{{/required}} data-name="{{name}}" rows="5" class="{{label}} form-control" placeholder="{{placeHolder}}"></textarea>\
									</div>\
								{{/isTextArea}}\
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

	var times = 6;

	$.fn.addArrange = function(filedsView) {
		/*添加面试安排*/
		this.each(function() {
			$(this).on('click', '.add-arrange', function(e) {
				e.preventDefault();
				var $panel = $('.arrange-panel');
				if($panel.find('.wrapper').size() >= 5) {
					alert('interview cannot be over 5 times.')
				}else {			
					/*时间插件需要不同的ID*/
					$.each(filedsView.fields, function(key, value) {
						 if(this['isDate']) {
						 	value['isDate']['dateID'] = value['isDate']['dateIDTpl'] + times++;
						 }
					});
					/*渲染*/
					$(Mustache.render(fieldsTpl, filedsView))
						.insertBefore($(this).closest('.form-group'))
						.slideDown('fast');		

					/*更新interview的下标的顺寻*/
					$.validator.addClassRules("check-in-list", {
					  	'checkInList': true
					});
					$panel.trigger('update');					
				}				
			})
			/*删除面试安排*/
			.on('click', '.delete-arrange', function(e) {
				e.preventDefault();
				if(confirm('Are you sure to delete it?')) {					
					$(this).closest('.wrapper').slideUp('fast', function() {						
						$(this).find('input[data-provide="typeahead"]').typeahead('destroy');
						$pannel = $(this).closest('.arrange-panel');
						$(this).remove();
						/*更新interview的下标的顺寻*/
						$pannel.trigger('update');						
					});
				}		
			})
			/*更新interview下标顺序、时间插件和自动完成插件的方法.*/
			.find('.arrange-panel').on('update', function() {

				$(this).find('.wrapper').each(function(index) {
					var $fields = $(this).find('[data-name]');					
					$fields.each(function() {
						$(this).prop('name', 'interview[' + index + ']' + '[' + $(this).data('name') + ']');
					});
				});
				/*更新时间插件*/
				$(this).find('.form-date').datetimepicker({        
			        weekStart: 1,
			        todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					startView: 2,
					forceParse: 0,
			        showMeridian: 1
			    })
			    /*更新typeahead插件*/
			    $(this).find('input[data-provide="typeahead"]').each(function() {
					var map = $(this).data('source') || $(this).closest('.data-source').data('source'),
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
		});		
	};
});