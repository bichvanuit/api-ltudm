module.exports = {
	friendlyName: 'Update profile',
	description: '',
	inputs: {
		data : {type : 'ref'}
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var bcrypt = require('bcrypt');
		let data = inputs.data;
		let user = await Users.findOne({id : this.req.token});
		let type = user.type.split(",");
		if(data.new_password != "") {
			if(data.new_password.localeCompare(data.confirm_password) != 0) {
				return exits.success({status : 0, message : "Mật khẩu không khớp", value : false});
			}			
			let social = user.type.split(",");
			if(social.indexOf("0") > -1) {
				var sha256 = require('js-sha256');
				if(sha256(data.old_password) + "PvulWRc3SdGH9MQvp2R0" != user.password) {
					return exits.success({status : 0, message : "Mật khẩu cũ không đúng", value : false});
				}
			} else {
				type.push("0");
			}
			
		}
		var rawResult = await Users.update({id : this.req.token}).set({
			fullname : data.fullname,
			sex : data.sex,
			password : await sails.helpers.encryptPassword(data.new_password),
			day : data.day,
			month : data.month,
			year : data.year,
			type : type.join(","),
		}).fetch();
		return exits.success({status : 1, message : true, value : rawResult});
	}
};
