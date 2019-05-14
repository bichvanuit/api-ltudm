module.exports = {
	friendlyName: 'Get location',
	description: '',
	inputs: {
		id : {type : 'number'},
		province_id : {type : 'number'},
		district_id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var condition = new Object();
		for(var i in inputs) {
			condition[i] = inputs[i]
		}
		var len = Object.keys(condition).length, unique = null;
		if(!len) {
			unique = "province_id";
		} else if(len == 1){
			unique = "district_id";
		}
		var rawResult = await Location.find({
			where: condition,			
		}).exec(function(err, records) {       		
			var result = [];
			if(unique == null) {
				result = records;
			} else {
				records.map(item => item[unique]).filter(function (value, index, self) {			
					if(self.indexOf(value) === index){
						result.push(records[index]);
					}
				});
			}
			return exits.success({status : 1, message : true, value : result});	
		});		
	}
};
