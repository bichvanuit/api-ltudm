module.exports = {
	friendlyName: 'Get detail marketplace',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Marketplace.findOne({id : inputs.id});
		return exits.success({status : 1, message : true, value : rawResult});
	}
};
