module.exports = {
	friendlyName: 'Get product hot',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var currentTime = new Date().getTime(), category = null, tmp = null;
		let param = this.req.allParams();
		let limit = 5, skip = 0;
		let GET_INFO_PRODUCT_SQL = "";
		if(typeof param['page'] !== "undefined") {
			limit = 20;
			skip = (param['page'] - 1) * 20;
		}
		rawResult = await Product_search.find({ update_at: { '>': currentTime-(14*24*60*60*1000)}}).sort('count DESC').skip(skip).limit(limit);	
		result = [];		
		for(var i in rawResult) {
			category = await sails.helpers.getCategory(rawResult[i].category_id);
			console.log(category);
			GET_INFO_PRODUCT_SQL = "SELECT p.*, s.count FROM " + category + " p INNER JOIN Product_search s ON p.id = s.product_id WHERE p.id = " + rawResult[i].product_id;			
			tmp = await sails.sendNativeQuery(GET_INFO_PRODUCT_SQL);			
			result.push(tmp.rows[0]);
		}
		return exits.success({status: 1, message: true, value : result});
	}


};
