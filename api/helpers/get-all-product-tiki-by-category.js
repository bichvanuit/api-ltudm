module.exports = {
	friendlyName: 'Get all product tiki by category',
	description: '',
	inputs: {
		url : {type : 'string'},
	},
	exits: {
		success: {
			outputFriendlyName: 'All product tiki by category',
			outputType: 'ref'
		},
	},
	fn: async function (inputs, exits) {		
		var numPage = await sails.helpers.getNumPage(inputs.url), arrResult = [];
		for(var i = 1; i < numPage; i++) {
			arrResult = arrResult.concat(await sails.helpers.crawlPage(inputs.url + "%3Fpage%3D2&page=" + i));
		}
		return exits.success(arrResult);
	}
};

