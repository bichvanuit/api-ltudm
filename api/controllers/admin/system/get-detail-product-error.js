module.exports = {
	friendlyName: 'Get detail product error',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Product_error.findOne({id : inputs.id});
		return exits.success({status : 1, message : true, value : rawResult});
	}
};
