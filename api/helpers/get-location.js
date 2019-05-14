module.exports = {
	friendlyName: 'Getlocation',
	description: 'Getlocation something.',
	inputs: {
		ip : { type : "string"},
	},
	exits: {
	
	},
	fn: async function (inputs, exits) {
		var request = require('request');
		var result = {};
		var options = {
			url: 'http://ip-api.com/json/',
			method: 'get',
			headers: {
				'User-Agent':       'Super Agent/0.0.1',
				'Content-Type':     'application/x-www-form-urlencoded'
			}
		}
		request(options, function (error, response, body) {
			if(!error && response.statusCode == 200) {
				var locations = JSON.parse(body);
				result.city = locations.city;
				result.country = locations.country;
				return exits.success(result);
			}
		});
	}
};

