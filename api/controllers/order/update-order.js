module.exports = {
	friendlyName: 'Update order',
	description: '',
	inputs: {
		data :  {type : 'json'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let data = inputs.data;
		data["transport_fee"] = "0";
		data["status"] = 1;
		let order = await Orders.update({user_id : this.req.token, status : 0}).set(data).fetch();		
		if(order.length > 0) {
			await User_cart.update({user_id : this.req.token, status : 0}).set({status : 1});
			let product = [], category = null, t = null;
			let order_detail = await Order_detail.find({order_id : order[0].id});
			for(let i in order_detail) {
				category = await sails.helpers.getCategory(order_detail[i].category_id);
				t = await sails.sendNativeQuery("SELECT o.*, c.product_name, c.image, c.url_product, c.price_sale FROM " + category + " c INNER JOIN order_detail o ON c.id=o.product_id WHERE c.id=" + order_detail[i].product_id + " AND o.order_id=" + order[0].id);
				product.push(t.rows[0]);
			}
			
			let template = await sails.helpers.templateMailOrder(order[0], product, await Location.findOne({id : order[0].commune}));
			await sails.helpers.sendmail(template, "MW Mart nhận được đơn hàng #" + order[0].id, order[0].email);
			return exits.success({status:1, message: true, value: true});
		}
		return exits.success({status:0, message: false, value: false});
	}
};
