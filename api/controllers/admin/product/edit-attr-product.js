module.exports = {
	friendlyName: 'Edit attr product',
	description: '',
	inputs: {
		category : {type : 'string'},
		productId : {type : 'number'},
		attr : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await sails.sendNativeQuery("UPDATE " + inputs.category + " SET attribute = '" + inputs.attr + "' WHERE id=" + inputs.productId);		
		if(rawResult) {
			return exits.success({status : 1, message : true, value : true});
		}
		return exits.success({status : 0, message : false, value : false});		
	}
};
