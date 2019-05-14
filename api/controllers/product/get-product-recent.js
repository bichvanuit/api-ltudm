module.exports = {
	friendlyName: 'Get product recent',
	description: '',
	inputs: {
		data : {type : 'json'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let result = [],tmp = null, data = null, category = null, id = null;
		if(this.req.headers !== "undefined" && this.req.headers.authorization) {
			let token = this.req.headers.authorization.split(" ")[1];
			try {
				var decoded = sails.jwt.verify(token, sails.config.custom.tokenSecret);	
				if(this.req.param('page') == undefined) {
					data = await User_viewed_product.find({ user_id : decoded.data }).sort('create_at DESC').limit(5);	
				} else {
					if(this.req.param('page') == "1") {
						data = await User_viewed_product.find({ user_id : decoded.data }).sort('create_at DESC');
					} else {
						data = null;
					}					
				}
			} catch (err) {
				
			}						
		}	
		if(data == null) {
			if(inputs.data == null) {
				return exits.success({status:0, message: false, value:false});						
			}
			data = JSON.parse(inputs.data);
		}							
		for(var i in data){
			category = await sails.helpers.getCategory(data[i].category_id);
			tmp = await sails.models[category].findOne({id : data[i].product_id});						
			result.push(tmp)
		}	
		return exits.success({status:1, message: true, value:result});
	}
};
