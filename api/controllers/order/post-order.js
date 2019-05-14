module.exports = {
	friendlyName: 'Post order',
	description: '',
	inputs: {
		data : {type : 'json'},
	},
	exits: {
	},
				
	fn: async function (inputs, exits) { 	
		let data = inputs.data;	
		data["user_id"] = this.req.token;
		let cart = await User_cart.find({
			user_id : data.user_id,
			status : 0,
		});
		if(cart.length == 0) {
			return exits.success({status : 0, message : "Not found cart", value : false});
		}		
		let tmp = cart.filter(item => {
			return item.order_id == 0;
		});
		
		if(tmp.length == cart.length) {
			var order = await Orders.create(data).fetch();	
			order_id = order.id;
		} else {
			await Orders.update({id : cart[0].order_id}).set(data);
			cart = tmp;
			order_id = cart[0].order_id;
		}
		
		await User_cart.update({
			user_id : data.user_id,
			order_id : 0,
		}).set({order_id : order_id});
		
		for(var i in cart) {				
			await Order_detail.create({
				order_id : order_id,
				product_id : cart[i].product_id,
				category_id : cart[i].category_id,
				amount : cart[i].amount
			});						
		}		
		return exits.success({status : 1, message : true, value : order_id});
	}
};
