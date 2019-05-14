module.exports = {
	friendlyName: 'Approve product',
	description: '',
	inputs: {		
		id : {type : 'number'}, 
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var category = await Product_tmp.findOne({id:inputs.id}),
		tableName = await Category.findOne({id:category.category_id}),
		APPROVE_PRODUCT_SQL = `INSERT  ${tableName.description} (product_name, url, price_sale, price, brand, image, origin, attribute) SELECT product_name, url, price_sale, price, brand, image, origin, attribute FROM product_tmp WHERE id=${inputs.id}`;
		await sails.sendNativeQuery(APPROVE_PRODUCT_SQL);
		var DELETE_PRODUCT_TEMP = `DELETE FROM product_tmp WHERE id=${inputs.id}`;
		await sails.sendNativeQuery(DELETE_PRODUCT_TEMP);
		return exits.success({status : 1, message : "OK", value : "true"});
	}
};
