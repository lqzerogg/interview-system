jQuery(function($) {
	var filedsView = {
		'fields': [			
			{
				'label': 'interviewer',
				'text': '面试官',
				'name': 'interviewer',
				'required': true,
				'isInput': {					
					'type': 'text',
					'placeHolder': '张良'
				}
			},							
			{
				'label': 'interviewer-level',
				'text': '面试官级别',
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
				'text': '面试时间',
				'name': 'time',
				'required': true,
				'isInput': {					
					'type': 'date',
					'placeHolder': ''
				}
			},
			{
				'label': 'score',
				'text': '面试官评分',
				'name': 'score',
				'required': false,
				'isInput': {					
					'type': 'number',
					'placeHolder': '100.00'
				}
			},	
			{
				'label': 'evaluation',
				'text': '面试评价',
				'name': 'evaluation',
				'required': false,
				'isTextArea': {
					'placeHolder': '写入评价'
				}
			}
		]
	};

	$('.arrange-panel').addArrange(filedsView);	
});