module.exports = {
	friendlyName: 'Seach',
	description: 'Seach product.',
	inputs: {		
	},
	exits: {
	},
	fn: async function (inputs, exits) {	
		var q = this.req.param('q'),
		param = this.req.allParams(), result = new Object(), page = 1;
		delete param['q'];
		if(typeof param['page'] !== "undefined") {
			delete param['page'];
		}
		param.product_name = {'contains' : q};
		var product_camera = await Product_camera.find({ where : param }),
		product_phone = await Product_phone.find({ where : param }),
		product_laptop = await Product_laptop.find({ where : param });		
		switch (q) {
			case "phone" :
				delete param['product_name'];
				result["product"] = await Product_phone.find({ where : param }).sort('id DESC');
				break;
			case "laptop":
				delete param['product_name'];
				result["product"] = await Product_laptop.find({ where : param }).sort('id DESC');
				break;
			case "camera":
				delete param['product_name'];
				result["product"] = await Product_camera.find({ where : param }).sort('id DESC');
				break;
			default:
				result["product"] = product_camera.concat(product_phone).concat(product_laptop);			
		}
		result["total"] = result["product"].length;
		if(result["total"] == 0) {
			return exits.success({status:0, message: false, value: "Not found product"});
		}
		result["filter"] = await sails.helpers.fieldFilter(JSON.stringify(result["product"]));	
		if(typeof this.req.query.page !== "undefined") {
			page = this.req.query.page;
		}		
		result["product"] = result["product"].slice((page - 1) *20, page*20);
		
		let keyword = {keyword : q};
		let countKeyWord = await Search_trend.find(keyword);
		if(!countKeyWord.length) {
			await Search_trend.create(keyword);
		} else {
			await Search_trend.update(keyword).set({count : countKeyWord[0].count + 1});
		}	
		return exits.success({
			status : 1, 
			message : true, 
			value : result,
		});	
	}
};
