module.exports = {
	friendlyName: 'Create link marketplace',
	description: '',
	inputs: {
		data : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {   
		var url = await sails.helpers.vnToString(inputs.data.toLowerCase());
		url = "/" + url.replace(/[^a-z0-9]/g, "-");
		return exits.success(url);
	}
};

