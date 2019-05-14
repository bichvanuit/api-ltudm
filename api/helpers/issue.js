module.exports = {
	friendlyName: 'Issue',
	description: 'Issue something.',
	inputs: {
		payload : {type : 'ref'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {    
		return exits.success(sails.jwt.sign(inputs.payload, sails.config.custom.tokenSecret, { expiresIn : 3600}));
	}


};

