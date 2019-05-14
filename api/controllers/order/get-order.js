module.exports = {
	friendlyName: 'Get order',
	description: '',
	inputs: {		
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var result = [];			
		let order = await Orders.find({user_id: this.req.token, status : 0});
		if(order.length == 0) {
			return exits.success({status : 0, message : "Not found order", value : false});
		}
		let location = await Location.findOne({id : order[0].commune});	
		return exits.success({status : 1, message : "OK", value : {"info" : order[0], "location" : location}});
	}
};
