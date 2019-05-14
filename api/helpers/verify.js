module.exports = {
	friendlyName: 'Verify',
	description: 'Verify something.',
	inputs: {
		token : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {    
		return exits.success(sails.jwt.verify(inputs.token, sails.config.custom.tokenSecret, {}));
	}
};

