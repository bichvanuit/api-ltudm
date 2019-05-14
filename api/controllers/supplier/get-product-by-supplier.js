module.exports = {
	friendlyName: 'Get product by supplier',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		console.log(inputs.id);
		var supplier = await Supplier.findOne({id:inputs.id});
		url = "https://tiki.vn" + supplier.link, arrUrl = [],
		numPage = await sails.helpers.getnumpage(url);
		for(var i = 0; i <= numPage; i++) { 
			arrUrl = arrUrl.concat(await sails.helpers.crawlbysupplier("https://tiki.vn" + supplier.link + "&page=" + i));
		}
		return exits.success({status : 1, message : "OK", value : arrUrl});
	}
};
