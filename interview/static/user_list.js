jQuery(function($) {
	$('.info-list').on('click', '.reset-password', function(e) {
		return confirm("您确认要重置密码吗？");
	});

	/*$('.user-form').on('submit', function(e) {
		var params = $(this).serialize();
		console.log(params);
		return false;
	})*/
});