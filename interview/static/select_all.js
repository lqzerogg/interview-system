jQuery(function($) {
	$('.selecting-table .all').on('click', function(e) {
		var $this = $(this);
		e.preventDefault();
		
		if($this.hasClass('btn-default')) {
			$this.removeClass('btn-default').addClass('btn-success');

			$this.closest('.selecting-table').find('input[name="ids"]').prop('checked', 'checked');
		}else {
			$this.addClass('btn-default').removeClass('btn-success');

			$this.closest('.selecting-table').find('input[name="ids"]').prop('checked', false);
		}
	});
});