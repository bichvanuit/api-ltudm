module.exports = {		
	friendlyName: 'Register',
	description: 'Register customer.',
	inputs: {
		username : { type : 'string' },
		password : { type : 'string' },
		confirm : { type : 'string' },
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let username = inputs.username;
		let password = inputs.password;
		let confirm = inputs.confirm;
		if(password != confirm) {
			return exits.success({status : 0, message : "Mật khẩu không khớp", value : false});
		}
		var isExist = await Users.find({username : username});
		if(isExist.length > 0) {
			return exits.success({status : 0, message : "Email đã tồn tại", value : false});
		}		
		let user = await Users.create({username : username, password : password}).fetch();				
		let templateMail = await sails.helpers.templateMailActive(username, await sails.helpers.encryptCode(user.id));
		await sails.helpers.sendmail(templateMail, "Kích hoạt tài khoản", user.username);
		return exits.success({
			status : 1, 
			message : true, 
			value : {			
				user : user
			}
		});				
	}
};
