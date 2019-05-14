module.exports = {
	friendlyName: 'Get all category',
	description: '',
	inputs: {
	},
	exits: {
	},
	
	fn: async function (inputs, exits) {
		var rawResult = await Category.find();
		return exits.success({status : 1, message : "OK", value : rawResult});
	}
};
