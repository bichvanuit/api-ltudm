module.exports = {
	friendlyName: 'Get cart',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let data = [], result = [], tmp = null, category = null;
		data = await User_cart.find({user_id : this.req.token, status : 0});
		if(data.length == 0) {
			return exits.success({status : 0, message : "Not found cart", value : true});
		}
		for(var i in data) {
			category = await sails.helpers.getCategory(data[i].category_id);
			tmp = await sails.sendNativeQuery("SELECT p.id, p.category_id, p.product_name, p.price, p.price_sale, p.image, p.url_product, m.marketplace FROM " + category + " p INNER JOIN marketplace m ON m.id = p.marketplace_id " + "WHERE p.id=" + data[i].product_id);			
			tmp.rows[0].num = data[i].amount; 
			result.push(tmp.rows[0]);
		}
		let totalPrice =  result.map((item, index) => {return item.price_sale*data[index].amount;}).reduce((prev, next) => prev + next),
		transferCost = totalPrice > 200000 ? 0 : 10000;
		return exits.success({
			status : 1, 
			message : true, 
			value : {
				product : result, 
				totalPrice : totalPrice,
				transferCost : transferCost,
			}
		}); 
	}
};
