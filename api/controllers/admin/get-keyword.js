module.exports = {
	friendlyName: 'Get keyword',
	description: '',
	inputs: {
	},
	exits: {
	},
	
	fn: async function (inputs, exits) {
		var rawResult = await Search_trend.find()
			.sort('count DESC')
			.limit(10);
		return exits.success({status:1,message:"OK",value:rawResult});
	}


};
