module.exports = {
	friendlyName: 'Get category',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {       
		var category = null;
		if(inputs.id == 1) {
			category = "product_phone";
		} else if(inputs.id == 2) {
			category = "product_laptop";
		} else if(inputs.id == 3){
			category = "product_camera";
		}
		return exits.success(category);
	}
};

