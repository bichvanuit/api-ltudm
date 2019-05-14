module.exports = {
	friendlyName: 'Switch to product error',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		APPROVE_PRODUCT_SQL = `INSERT  product_error (category_id, marketplace_id, crawl_id, product_name, url, price_sale, price, manufacturer, image, attribute, origin, camera, resolution, chip, graphic_card, operating_system, RAM, ROM, screen_size, front_camera, after_camera, create_at, update_at, status) SELECT category_id, marketplace_id, crawl_id, product_name, url, price_sale, price, manufacturer, image, attribute, origin, camera, resolution, chip, graphic_card, operating_system, RAM, ROM, screen_size, front_camera, after_camera, create_at, update_at, status FROM product_tmp WHERE id=${inputs.id}`;
		await Product_tmp.update({id : inputs.id}).set({status : 1});
		await sails.sendNativeQuery(APPROVE_PRODUCT_SQL);
		return exits.success({status : 1, message: true, value : true});
	}
};
