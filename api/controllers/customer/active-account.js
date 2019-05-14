module.exports = {
	friendlyName: 'Active account',
	description: '',
	inputs: {
		data : {type : 'json'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let id = null;
		try {
			id = await sails.helpers.decryptCode(inputs.data);
		} catch(e) {
			return exits.success({status : 0, message : false, value : false});
		}			
		let user = await Users.findOne({id: id});
		if(!user) {
			return exits.success({status : 0, message : false, value : false});
		} else {
			let user = await Users.update({id : id}).set({status : 1}).fetch();
			let token = sails.jwt.sign({"data" : id}, sails.config.custom.tokenSecret, { expiresIn : 3600});	
			return exits.success({status : 1, message:false, value : {"token" : token, "user" : user[0]}});
		}
	}
};
