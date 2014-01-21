jQuery(function($) {
	var filedsView = {
		'fields': [
			{
				'label': 'place',
				'text': '面试地点',
				'name': 'place',
				'required': false,
				'isInput': {					
					'type': 'text',
					'placeHolder': '北京'
				}
			},
			{
				'label': 'method',
				'text': '面试方式',
				'name': 'method',
				'required': false,
				'isInput': {					
					'type': 'text',
					'placeHolder': '面谈'
				}
			},
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

	$(document).addArrange(filedsView);	
});