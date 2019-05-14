module.exports = {	
	friendlyName: 'Login with facebook',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let passport = require('passport');			
		passport.authenticate('facebookToken', { session: false } , function(err, user, info) {
			if(err) {
				return exits.success ({status : 0, message : false, value: false});	
			}
			if(user == null) {
				return exits.success ({status : 0, message : info.message, value: false});	
			}
			let token = sails.jwt.sign({"data" : user.id}, sails.config.custom.tokenSecret, { expiresIn : 3600});
			return exits.success ({status : 1, message : true, value: token});	
		})(this.req, this.res);	
	}
};
