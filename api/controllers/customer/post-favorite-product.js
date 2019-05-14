module.exports = {
	friendlyName: 'Post favorite product',
	description: '',
	inputs: {
		data : {type : 'json'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {	
		let data = inputs.data;
		let obj = {
			product_id : data.product_id,
			category_id : data.category_id,
			user_id : this.req.token,
		};
		let tmp = await Product_favorite.find(obj);
		if(tmp.length > 0) {
			await Product_favorite.destroy(obj);
			return exits.success({status:0, message:false,value:false});
		}
		await Product_favorite.create(obj);
		return exits.success({status:1, message:true,value:true});
	}
};
