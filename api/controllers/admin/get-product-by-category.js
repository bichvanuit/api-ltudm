module.exports = {
	friendlyName: 'Get product by category',
	description: '',
	inputs: {
		category_id : {type : 'number'}
	},
	exits: {
	},
	
	fn: async function (inputs, exits) {
		var category = await Category.findOne({id : inputs.category_id}),		
		rawResult = await sails.sendNativeQuery("SELECT * FROM " + category.description);
		return exits.success({status : 1, message : "OK", value : rawResult.rows});
	}
};
