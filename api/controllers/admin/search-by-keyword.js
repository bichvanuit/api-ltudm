module.exports = {
	friendlyName: 'Search by keyword',
	description: '',
	inputs: {
		keyword : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Product.find({product_name: {contains: inputs.keyword}});
		return exits.success({status : 1, message : "OK", value : rawResult});
	}
};
