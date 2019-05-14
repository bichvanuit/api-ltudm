module.exports = {
	friendlyName: 'Post product viewed',
	description: '',
	inputs: {
		data : {type : 'ref'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let data = inputs.data;
		data["user_id"] = this.req.token;
		let tmp = await User_viewed_product.find();
		let index = tmp.findIndex(item => {
			return item.user_id == data.user_id && item.product_id == data.product_id && item.category_id == data.category_id;
		});
		if(index == -1) {
			await User_viewed_product.create(data);
		}
		if(tmp.length > 20) {
			await User_viewed_product.destroy({id : tmp[0].id});
		}
		return exits.success({status : 1, message : true, value : true});
	}
};
