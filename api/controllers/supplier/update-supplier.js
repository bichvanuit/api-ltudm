module.exports = {
	friendlyName: 'Update supplier',
	description: '',
	inputs: {

	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var link = await Category.find();
		for(var i in link) {
			var listSupplier = await sails.helpers.crawlsupplier(link[i].category_url);
			for(var index in listSupplier) {	
				var tmp = await Supplier.find({supplier_name: listSupplier[index].name, link : listSupplier[index].url});
				if(tmp.length == 0) {
					await Supplier.create({
						supplier_name : listSupplier[index].name,
						link : listSupplier[index].url,
						category_id : link[i].id,
						create_at : await sails.helpers.getcurrentdate(),	
						update_at : await sails.helpers.getcurrentdate(),
					});
				}
			}
		}
		return exits.success({status : 1, message : "OK", value : true});

	}
};
