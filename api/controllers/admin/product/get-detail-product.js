module.exports = {
	friendlyName: 'Get product by id',
	description: '',
	inputs: {
		category : {type : 'string'},
		productId : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {		
		var	rawResult = await sails.sendNativeQuery("SELECT * FROM " + inputs.category + " WHERE id=" + inputs.productId);		
		return exits.success({status : 1, message : true, value : rawResult.rows[0]});
	}
};
