jQuery(function($) {
	var fileTpl = '<div>\
					   <input formnovalidate="formnovalidate" type="file" multiple class="none form-control files" name="files">\
					   <button class="btn btn-danger delete" type="button"><span class="glyphicon glyphicon-minus-sign"></span> delete</button>\
				   </div>';
	Mustache.parse(fileTpl);
	/*添加附件*/
	$(document).on('click', '.add-attachment', function(e) {

		e.preventDefault();

		var $fileWrapper = $(this).closest('.form-group').find('.file-wrapper');

		if($fileWrapper.find('.files').size() >= 3) {
			alert('There cannot be over 3 attachments.');
		}else {			
			$(Mustache.render(fileTpl, {})).appendTo($fileWrapper).slideDown('fast');
		}
	}).on('click', '.file-wrapper .delete', function(e) {
		e.preventDefault();

		if(confirm('Are you sure to delete it?')) {
			$(this).parent().remove();
		}
	});			

});