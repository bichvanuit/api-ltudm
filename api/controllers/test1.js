module.exports = {	
	friendlyName: 'Test 1',
	description: '',
	inputs: {
		url : {type : 'string'}
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		/*
		var product = await Product_camera.find(), origin = null;
		for(var i in product) {
			origin = await sails.helpers.getAttrProduct('[{"attribute_name" : "origin", "keyword" : "Sản xuất tại"}]', product[i].attribute);
			origin = JSON.parse(origin);
			await Product_camera.update({id : product[i].id}).set({origin : origin.origin});
		}*/
		
		/*var product = await Product_tmp.find(), tmp = null;
		for(var i in product) {
			tmp = product[i].product_name.replace(/\'/g," ");
			await Product_tmp.update({id:product[i].id}).set({product_name:tmp});
		}*/
		
		/*var product_tmp = await Product_tmp.find({category_id:3}), tmp = null, abc = [];
		for(var i in product_tmp) {			
			tmp = await Product_tmp.find({url : product_tmp[i].url});			
			if(tmp.length > 1) {
				await Product_tmp.destroy({id:tmp[0].id});			
			}
		}*/
		
		//this.req.setTimeout(1000000);
		/*var SQL = "SELECT origin, COUNT(id) sl FROM  Product_camera GROUP BY origin ORDER BY sl",
		q = await sails.sendNativeQuery(SQL);*/
		
		/*var product = await Product_laptop.find(), url = null;
		for(var i in product){
			url = await sails.helpers.vnToString(product[i].product_name);
			url = url.replace(/ /g, "-");
			await Product_laptop.update({id : product[i].id}).set({url_product : "/" + url + "-v" + product[i].id});
		}
		return exits.success({status : 1, message: true, value : true});
		/*var rawResult = await Product_tmp.find({category_id:2, status : 0}), product = null, abc = null;
		for(var i in rawResult) {
			if(rawResult[i].url == "") {
				await Product_tmp.destroy({id : rawResult[i].id});
			} else {
				product = await sails.helpers.crawlDetail(rawResult[i].url);
				fileName =  "product" + String(new Date().getTime()) + product.img.slice(product.img.lastIndexOf(".")),
				tmp = await Marketplace.find({marketplace : product.marketplace}), marketplaceid = 0,
				attr = await Attribute_product_tiki.find({type : rawResult[i].category_id});
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
				
				
				for(var j in attribute) {
					UPDATE_PRODUCT_SQL += j + " = '" + attribute[j] + "',";
				}			
				UPDATE_PRODUCT_SQL = UPDATE_PRODUCT_SQL.slice(0, -1);			
				UPDATE_PRODUCT_SQL += ` WHERE id = ${rawResult[i].id}`;
				await sails.sendNativeQuery(UPDATE_PRODUCT_SQL);
				
				try {
					abc = JSON.parse(product.attr);
					category = await Category.findOne({id : rawResult[i].category_id});
					attribute = category.attribute.split(","),
					attrString = attribute[0];
					for(var m = 1; m < attribute.length; m++) {
						attrString += ", " + attribute[m];
					}	
					
					APPROVE_PRODUCT_SQL = `INSERT  ${category.description} (category_id, marketplace_id, product_name, url, price_sale, price, manufacturer, image, attribute, ${attrString}) SELECT category_id, marketplace_id, product_name, url, price_sale, price, manufacturer, image, attribute, ${attrString} FROM product_tmp WHERE id=${rawResult[i].id}`;
					await sails.sendNativeQuery(APPROVE_PRODUCT_SQL);
				} catch (e){
					APPROVE_PRODUCT_SQL = `INSERT  product_error (category_id, marketplace_id, crawl_id, product_name, url, price_sale, price, manufacturer, image, attribute, origin, camera, resolution, chip, graphic_card, operating_system, RAM, ROM, screen_size, front_camera, after_camera, create_at, update_at, status) SELECT category_id, marketplace_id, crawl_id, product_name, url, price_sale, price, manufacturer, image, attribute, origin, camera, resolution, chip, graphic_card, operating_system, RAM, ROM, screen_size, front_camera, after_camera, create_at, update_at, status FROM product_tmp WHERE id=${rawResult[i].id}`;
					await sails.sendNativeQuery(APPROVE_PRODUCT_SQL);	
				}		
				await Product_tmp.update({id : rawResult[i].id}).set({status : 1});	
			}
		}*/
		
		//return exits.success({status : 1, message: true, value : true});
		
		//var tmp = await Product_phone.find({"origin":"Trung Quốc"});
	//	var tmp = await sails.sendNativeQuery("SELECT * FROM product_camera WHERE origin='Trung Quốc'");
	//	let tmp = await Product_camera.find().paginate({page: 2, limit: 10});
	
		// return new Promise(function(resolve, reject) {
		//	 if()
		// });
		return exits.success({status : 1, message: true, value : true});
	}
};
