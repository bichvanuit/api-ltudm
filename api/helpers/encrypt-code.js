module.exports = {
	friendlyName: 'Encrypt code',
	description: '',
	inputs: {
		plaintext : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {    
		var cryptos = require('crypto'),
		cipher = cryptos.createCipher('aes256', "MXOQJk46Qy7fmEvulawYrFN6vyXSnCnjnY8Wmkos5vHqAcye0gaC45tftNIcHIBfqxc82fPpjCINsIfoztA7scUMHKfXUgGrBvD"),
		crypted = cipher.update(inputs.plaintext,'utf8','hex');
		crypted += cipher.final('hex');
		return exits.success(crypted);
	}
};

