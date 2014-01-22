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
				'isInput': {					
					'type': 'text',
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
				'isInput': {					
					'type': 'date',
					'placeHolder': ''
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

	// $(document).addArrange(filedsView);	
});