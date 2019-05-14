module.exports = {
	friendlyName: 'Post evaluate',
	description: '',
	inputs: {
		data : {type : 'ref'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let data = inputs.data;
		let tmp = await Product_evaluate.find({
			user_id : this.req.token,
			product_id : data.product_id,
			category_id : data.category_id,
		});
		if(tmp.length > 0) {
			return exits.success({status : 0, message : false, value : false});
		}
		await Product_evaluate.create({
			user_id : this.req.token,
			product_id : data.product_id,
			category_id : data.category_id,
			star : data.star,
			comment : data.comment,
		});
		return exits.success({status : 1, message : true, value : true});
	}
};
