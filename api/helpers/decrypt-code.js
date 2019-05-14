module.exports = {
	friendlyName: 'Decrypt code',
	description: '',
	inputs: {
		crypted : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var cryptos = require('crypto');
		var decipher = cryptos.createDecipher("aes256","MXOQJk46Qy7fmEvulawYrFN6vyXSnCnjnY8Wmkos5vHqAcye0gaC45tftNIcHIBfqxc82fPpjCINsIfoztA7scUMHKfXUgGrBvD");
		var dec = decipher.update(inputs.crypted,'hex','utf8');
		dec += decipher.final('utf8');
		return exits.success(dec);		
	}
};

