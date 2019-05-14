module.exports = {
	friendlyName: 'Update cart',
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
		}
		let tmp = await User_cart.find(obj);
		if(tmp.length == 0) {
			return exits.success({status : 0, message: "Not found cart", value: false});
		}
		await User_cart.update(obj).set({amount : +tmp[0].amount + +data.value});
		return exits.success({status : 1, message : true, value : true});
	}
};
