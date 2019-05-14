module.exports = {
	friendlyName: 'Update product',
	description: '',
	inputs: {
		category_id: {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		this.req.setTimeout(1000000);
		var category = await Category.findOne({id : inputs.category_id}),
		listProduct = await sails.helpers.getAllProductTikiByCategory(category.category_url), tmp = null, currentTime = await sails.helpers.getCurrentDate();
		for(var i in listProduct) {			
			tmp = JSON.parse(listProduct[i]);
			await Product_tmp.create({
				category_id : inputs.category_id,
				product_name : tmp.name,
				url : tmp.link,
				price_sale : tmp.price_sale,
				crawl_id : tmp.crawl_id,
				create_at : currentTime,
				update_at: currentTime,
			});
		}
		return exits.success({status : 1, message: true, value: listProduct});
	}
};
