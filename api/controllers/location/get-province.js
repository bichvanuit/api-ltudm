module.exports = {
	friendlyName: 'Get province',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		return exits.success({status : 1, message : true, value : await Province.find()});
	}
};
