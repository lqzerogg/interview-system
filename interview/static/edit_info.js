jQuery(function($) {
	var filedsView = {
		'fields': [
			{
				'label': 'place',
				'text': 'Place',
				'name': 'place',
				'required': false,
				'isInput': {					
					'type': 'text',
					'placeHolder': 'Beijing'
				}
			},
			{
				'label': 'method',
				'text': 'Methods',
				'name': 'method',
				'required': false,
				'isInput': {					
					'type': 'text',
					'placeHolder': 'metting'
				}
			},
			{
				'label': 'interviewer',
				'text': 'Interviewer',
				'name': 'interviewer',
				'required': true,
				'isCheckInList': {			
					'validateName': 'for-validate',
					'placeHolder': 'Alan'
				}
			},			
			{
				'label': 'interviewer-level',
				'text': 'Interviewer level',
				'name': 'interviewer_level',
				'required': true,
				'isSelect': {					
					'options': [
						{
							'value': '0',
							'text': '总裁/总监级别'
						},
						{
							'value': '1',
							'text': 'CEO'
						},
						{
							'value': '2',
							'text': '一般员工'
						}
					]
				}
			},
			{
				'label': 'time',
				'text': 'Interview Time',
				'name': 'time',
				'required': true,
				'isDate': {					
					'dateID': '',
					"dateIDTpl": 'form-date-'
				}
			},
			{
				'label': 'evaluation',
				'text': 'Comments',
				'name': 'evaluation',
				'required': false,
				'isTextArea': {
					'placeHolder': 'Comments'
				}
			}
		]
	};

	$(document).addArrange(filedsView);	

	$('.form-date').datetimepicker({        
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
});