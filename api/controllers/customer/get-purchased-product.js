module.exports = {
	friendlyName: 'Get purchased product',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let rawResult = await Orders.find({user_id : this.req.token}), result = [], order = null;
		if(rawResult.length == 0) {
			return exits.success({status : 0, message : "Not found product", value : false});
		}
		let limit = 5, skip = 0;
		if(this.req.param('page') != undefined) {
			limit = 20;
			skip = (this.req.param('page') - 1) * 20;
		}
		rawResult = rawResult.slice(skip, (skip + 1)*limit);		
		for (var j in rawResult) {
			order = await Order_detail.find({order_id : rawResult[j].id});
			for(var i in order) {
				category = await sails.helpers.getCategory(order[i].category_id);
				result.push(await sails.models[category].findOne({id : order[i].product_id}));
			}
		}
		return exits.success({status : 1, message : true, value : result});		
	}
};
