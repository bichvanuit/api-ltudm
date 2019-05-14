module.exports = {
	friendlyName: 'Delete order',
	description: '',
	inputs: {
		id : {type: 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		await Order_detail.destroy({id:inputs.id});
		return exits.success({status : 1, message : true, value : true});	
	}
};
