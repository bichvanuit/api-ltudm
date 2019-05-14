module.exports = {
	friendlyName: 'Login',
	description: 'Login customer.',
	inputs: {
		username : { type : 'string' },
		password : { type : 'string' },
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let username = inputs.username;
		let password = inputs.password;
		let user = await Users.find({username : username});
		if(user.length == 0) {
			return exits.success({status : 0, message : "Email nhập sai hoặc chưa được đăng ký", value : false});
		}
		if(user[0].status == 0) {
			return exits.success({status : 0, message : "Tài khoản chưa kích hoạt", value : false});
		}
		Users.comparePassword(password, user[0], function (err, valid) {
			if (!err && valid) {
				let token = sails.jwt.sign({"data" : user[0].id}, sails.config.custom.tokenSecret, { expiresIn : 3600});
				return exits.success({
					status : 1, 
					message : "OK", 
					value : {
						token : token,
						user : user[0],
					},
				}); 
			}
			return exits.success({status : 0, message : "Sai mật khẩu", value : false});
        });
		
	}


};
