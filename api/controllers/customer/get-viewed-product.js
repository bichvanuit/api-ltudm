module.exports = {
	friendlyName: 'Get viewed product',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let rawResult = await User_viewed_product.find({user_id : this.req.token}).sort('create_at DESC'), result = [];
		if(rawResult.length == 0) {
			return exits.success({status : 0, message : false, value : false});
		}
		let limit = 5, skip = 0;
		if(this.req.param('page') != undefined) {
			limit = 20;
			skip = (this.req.param('page') - 1) * 20;
		}
		rawResult = rawResult.slice(skip, (skip + 1)*limit);
		for(var i in rawResult) {
			category = await sails.helpers.getCategory(rawResult[i].category_id);
			result.push(await sails.models[category].findOne({id : rawResult[i].product_id}));
		}
		return exits.success({status : 1, message : true, value : result});		
	}
};
