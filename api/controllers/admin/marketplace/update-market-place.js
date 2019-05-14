module.exports = {
	friendlyName: 'Update market place',
	description: '',
	inputs: {
		id : {type : 'number'},
		member_from : {type : 'string'},
		type : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		await Marketplace.update({id:inputs.id}).set({
			member_from : inputs.member_from,
			type :  inputs.type,
		});
		return exits.success({status : 1, message : true, value : true});
	}
};
