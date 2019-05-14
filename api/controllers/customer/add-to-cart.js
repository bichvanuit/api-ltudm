module.exports = {
	friendlyName: 'Add to cart',
	description: '',
	inputs: {
		data : {type : 'ref'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let data = inputs.data;	
		let obj = {
			user_id : this.req.token,
			product_id : data.product_id,
			category_id : data.category_id,
			status : 0,
		};	
		let tmp = await User_cart.find(obj);
		if(tmp.length > 0) {
			await User_cart.update({id : tmp[0].id}).set({amount : +tmp[0].amount + +data.amount});
		} else {
			obj["amount"] = data.amount;
			await User_cart.create(obj);	
		}
		return exits.success({status : 1, message : true, value : true});
	}
};
