module.exports = {
	friendlyName: 'Get user',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var tmp = await User.update({id:inputs.id}).set({name:"abg"});
		var tmp = await sails.sendNativeQuery("select ");
		return exits.success();
	}
};
