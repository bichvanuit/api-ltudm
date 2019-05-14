module.exports = {	
	friendlyName: 'Approve product',
	description: '',
	inputs: {
		id : {type : 'number'},
		category : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var product = await Product_tmp.findOne({id: inputs.id}),
		category = await Category.findOne({id : inputs.category});
		attribute = category.attribute.split(","),
		attrString = attribute[0];
		for(var i = 1; i < attribute.length; i++) {
			attrString += ", " + attribute[i];
		}		
		APPROVE_PRODUCT_SQL = `INSERT  ${category.description} (category_id, marketplace_id, product_name, url, price_sale, price, manufacturer, image, attribute, ${attrString}) SELECT category_id, marketplace_id, product_name, url, price_sale, price, manufacturer, image, attribute, ${attrString} FROM product_tmp WHERE id=${inputs.id}`;
		await Product_tmp.update({id : inputs.id}).set({status : 1});
		await sails.sendNativeQuery(APPROVE_PRODUCT_SQL);
		return exits.success({status : 1, message: true, value : true});
	}
};
