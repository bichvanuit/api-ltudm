module.exports = {
	friendlyName: 'Get order',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let limit = 5, skip = 0, tmp = null, category = null, t = null, result = [], order = [], obj = new Object();
		if(this.req.param('page') != undefined) {
			limit = 20;
			skip = (this.req.param('page') - 1) * 20;
		}
		var rawResult = await Orders.find({user_id : this.req.token}).sort('create_at DESC').skip(skip).limit(limit);
		if(rawResult.length == 0) {
			return exits.success({status : 1, message : "Not found order", value: result});
		}
		for(var i in rawResult) {
			tmp = await Order_detail.find({order_id:rawResult[i].id});
			for (var j in tmp) {
				category = await sails.helpers.getCategory(tmp[j].category_id);
				t = await sails.sendNativeQuery("SELECT o.*, c.product_name, c.image, c.url_product, c.price_sale FROM " + category + " c INNER JOIN order_detail o ON c.id=o.product_id WHERE c.id=" + tmp[j].product_id + " AND o.order_id=" + rawResult[i].id);
				order.push(t.rows[0]);
			}
			result.push({"order_id" : rawResult[i].id, "product" : order});
			order = [];
		}
		return exits.success({status : 1, message : true, value : result});
	}
};
