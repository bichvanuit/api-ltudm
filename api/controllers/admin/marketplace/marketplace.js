module.exports = {
	friendlyName: 'Marketplace',
	description: 'Marketplace marketplace.',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var category = await Category.find(), marketplace = null;
		for(var i in category) {
			var tmp = await sails.helpers.crawlMarketplace(category[i].category_url);
			for (var j in tmp) {
				marketplace = await Marketplace.find({marketplace : tmp[j]});
				if(marketplace.length == 0) {
					
					await Marketplace.create({
						marketplace : tmp[j],
						url : await await sails.helpers.createLinkMarketplace(tmp[j]),
					});
				}							
			}
		}
		return exits.success({"status" : 1, "message" : true, "value" : true});
	}
};
