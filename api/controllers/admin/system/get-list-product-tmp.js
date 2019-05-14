module.exports = {
	friendlyName: 'Get list product tmp',
	description: '',
	inputs: {
		category_id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Product_tmp.find({
			where: {category_id: inputs.category_id, status : 0},
			select: ['product_name', 'price_sale', 'url']
		}).limit(10);
		return exits.success({status : 1, message : "OK", value : rawResult});
	}
};
