module.exports = {
	friendlyName: 'Field filter',
	description: '',
	inputs: {
		data : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {    
		var data = JSON.parse(inputs.data), result = new Object(), 
		attr = ["manufacturer", "origin", "camera", "resolution", "chip", "graphic_card", "operating_system", "RAM", "ROM", "screen_size", "front_camera", "after_camera"];
		for(var i in attr) {
			result[attr[i]] = data.map(item => item[attr[i]])
				.filter((value, index, self) => self.indexOf(value) === index);
					
			result[attr[i]].map((item, index) => {
				if(item == "Đang cập nhật") {
					result[attr[i]].splice(index, 1);				
					return;				
				}				
			});	
			if(result[attr[i]].length == 0) {
				delete result[attr[i]];
			}
			
		}		
		return exits.success(result);
	}
};

