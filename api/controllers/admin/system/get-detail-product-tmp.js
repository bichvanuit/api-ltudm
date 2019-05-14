module.exports = {
	friendlyName: 'Get detail product tmp',
	description: '',
	inputs: {
		id : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var rawResult = await Product_tmp.findOne({id:inputs.id});
		if(rawResult.url == "") {
			await Product_tmp.destroy({id : inputs.id});
			return exits.success({status : 0, message : false, value : false});
		}
		if(rawResult.attribute == null) {
			try {
				var product = await sails.helpers.crawlDetail(rawResult.url);
			} catch (error) {
				return exits.success({status : 0, message : false, value : false});
			}
			fileName =  "product" + String(new Date().getTime()) + product.img.slice(product.img.lastIndexOf(".")),
			tmp = await Marketplace.find({marketplace : product.marketplace}), marketplaceid = 0,
			attr = await Attribute_product_tiki.find({type : rawResult.category_id});
			attribute = JSON.parse(await sails.helpers.getAttrProduct(JSON.stringify(attr), product.attr));	
			await sails.helpers.downloadImage(product.img, "assets/img/product/" + fileName);
			if(tmp.length > 0) {
				marketplaceid = tmp[0].id;
			}
			var UPDATE_PRODUCT_SQL = `UPDATE Product_tmp
						SET price = ${product.price}, 
						manufacturer = '${product.manufacturer}',
						marketplace_id = '${marketplaceid}',
						image = '/img/product/${fileName}',
						attribute = '${product.attr}',`;						
			for(var i in attribute) {
				UPDATE_PRODUCT_SQL += i + " = '" + attribute[i] + "',";
			}
			UPDATE_PRODUCT_SQL = UPDATE_PRODUCT_SQL.slice(0, -1);			
			UPDATE_PRODUCT_SQL += ` WHERE id = ${inputs.id}`;
			await sails.sendNativeQuery(UPDATE_PRODUCT_SQL);
		}
		var result = await Product_tmp.findOne({id : inputs.id});   
		return exits.success({status : 1, message : true, value : result});
	}
};
