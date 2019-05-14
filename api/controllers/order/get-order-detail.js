module.exports = {
	friendlyName: 'Get order detail',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let order_id = this.req.param('id'), category = null, result = [],
		order = await Orders.find({id : order_id, user_id : this.req.token});
		if(order.length == 0) {
			return exits.success({status : 0, message : 'Not found order', value : false});
		}
		let order_detail = await Order_detail.find({order_id : order[0].id});
		for(var i in order_detail) {
			category = await sails.helpers.getCategory(order_detail[i].category_id);
			t = await sails.sendNativeQuery("SELECT o.*, c.product_name, c.image, c.url_product, c.price_sale FROM " + category + " c INNER JOIN order_detail o ON c.id=o.product_id WHERE c.id=" + order_detail[i].product_id + " AND o.order_id=" + order[0].id);
			result.push(t.rows[0]);
			//result.push(await sails.models[category].findOne({id : order_detail[i].product_id}));
		}	
		console.log(order_detail);
		console.log(result);
		let location = await Location.findOne({id : order[0].commune});
		return exits.success({status : 1, message : true, value : {
								"order" : order[0],
								"product" : result,
								"location" : location,
		}});
	}
};
