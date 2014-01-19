jQuery(function ($) {
	$('.selecting-table').on('click', '.delete', function(e) {		
		return confirm("您确定要删除吗？");
	});
});