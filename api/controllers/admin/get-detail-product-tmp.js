module.exports = {
	friendlyName: 'Get detail product tmp',
	description: '',
	inputs: {
		productId : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var fs = require('fs'),
		rawResult = await Product_tmp.findOne({id:inputs.productId});
		rawResult.image = fs.readFileSync(rawResult.image, 'base64');
		return exits.success({status : 1, message : "OK", value : rawResult});
	}
};
