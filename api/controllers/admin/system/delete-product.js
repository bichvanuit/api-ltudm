module.exports = {
	friendlyName: 'Delete product',
	description: '',
	inputs: {
		id : {type: 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		await Product_tmp.destroy({id:inputs.id});
		return exits.success({status : 1, message : true, value : true});	
	}
};
