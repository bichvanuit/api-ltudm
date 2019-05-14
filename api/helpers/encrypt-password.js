module.exports = {	
	friendlyName: 'Encrypt password',
	description: '',
	inputs: {
		data : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) { 
		var sha256 = require('js-sha256');
		var message = sha256(inputs.data) + "PvulWRc3SdGH9MQvp2R0";
		return exits.success(message);
	}
};

