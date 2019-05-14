module.exports = {			
	friendlyName: 'Get attr product',
	description: '',
	inputs: {
		attr : {type : 'json'},
		data : {type : 'json'},		
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var data = JSON.parse(inputs.data), result = new Object(),
		attr = JSON.parse(inputs.attr);	
		for(var i in attr) {			
			result[attr[i].attribute_name] = data[attr[i].keyword] !== undefined ? data[attr[i].keyword]  : 'Đang cập nhật';
		}		
		return exits.success(JSON.stringify(result));
	}
};

