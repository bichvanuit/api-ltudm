module.exports = {
	friendlyName: 'Get all customer',
	description: '',
	inputs: {
		// page : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let rawResult = await Users.find();
		return exits.success({	
    		status : 1, 
			message : true, 
			value: rawResult,
    	// 	value : {
    	// 		total : rawResult.length, 
    	// 		currentPage:inputs.page,
    	// 		data : rawResult.slice((inputs.page-1)*10, inputs.page*10),
		// }
	});		
	}
};
