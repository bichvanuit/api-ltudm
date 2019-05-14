module.exports = {
	friendlyName: 'Get all supplier',
	description: '',
	inputs: {
		page : {type:'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var supplier = await Supplier.find();	
    	return exits.success({	
    		status : 1, 
    		message : "OK", 
    		value : {
    			totalProduct : supplier.length, 
    			currentPage : inputs.page,
    			data : supplier.slice((inputs.page-1)*10, inputs.page*10),
    	}});
	}
};
