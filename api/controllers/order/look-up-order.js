module.exports = {
	friendlyName: 'Look up order',
	description: '',
	inputs: {
		data : {type : 'json'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Orders.find(inputs.data);
		if(rawResult.length == 0) {
			return exits.success({status: 0, message: false, value:"Không tìm thấy đơn hàng"});
		}
		var result = new Object(), category = null, t = null;
		result.order = rawResult[0];		
		result.product = [];
		tmp = await Order_detail.find({order_id : rawResult[0].id});
		result.location = await Location.findOne({id : rawResult[0].commune});
		for(var i in tmp) {
			category = await sails.helpers.getCategory(tmp[i].category_id);
			t = await sails.sendNativeQuery("SELECT o.*, c.product_name, c.image, c.url_product, c.price_sale FROM " + category + " c INNER JOIN order_detail o ON c.id=o.product_id WHERE c.id=" + tmp[i].product_id + " AND o.order_id=" + rawResult[0].id);
			result.product.push(t.rows[0]);
		}
		return exits.success({status: 1, message: true, value:result});
	}
};
