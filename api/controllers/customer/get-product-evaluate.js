module.exports = {
	friendlyName: 'Get product evaluate',
	description: '',
	inputs: {
		order_id : {type : 'string'},
		product_id : { type : 'string' },
	},
	exits: {
	},
	fn: async function (inputs, exits) {		
		let tmp = await Orders.find({user_id : this.req.token, id : inputs.order_id});
		if(tmp.length == 0) {
			return exits.success({status : 0, message : "Not found order", value : false});
		}
		tmp = await Order_detail.find({order_id : inputs.order_id, product_id : inputs.product_id});
		if(tmp.length == 0) {
			return exits.success({status : 0, message : "Not found product", value : false});
		}
		let category = await sails.helpers.getCategory(tmp[0].category_id);
		tmp = await sails.models[category].findOne({id : inputs.product_id});
		return exits.success({status : 1, message : true, value : tmp });
	}
};
