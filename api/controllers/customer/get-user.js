module.exports = {	
	friendlyName: 'Get user',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Users.findOne({
			where: {id : this.req.token},
			select: ['username', 'fullname', 'sex', 'day', 'month', 'year', 'type']	
		});
		if(rawResult == "undefined") {
			return exits.success({status : 0, message : false, value : false});
		}
		return exits.success({status : 1, message : true, value : rawResult});
	}
};
