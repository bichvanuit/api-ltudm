module.exports = {
	friendlyName: 'Get product of marketplace',
	description: '',
	inputs: {
		marketplaceId :{type:'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var marketplaceInfo = await Marketplace.findOne({id : inputs.marketplaceId}),
		productPhone = await Product_phone.find({marketplace_id : inputs.marketplaceId}),
		productLaptop = await Product_laptop.find({marketplace_id : inputs.marketplaceId}),
		productCamera = await Product_camera.find({marketplace_id : inputs.marketplaceId});
		return exits.success({
			status:1, 
			message: true, 
			value: {
				info : marketplaceInfo,
				phone : productPhone,
				laptop : productLaptop,
				camera : productCamera,
		}});
	}
};
