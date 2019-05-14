module.exports = {
	friendlyName: 'Upload product price',
	description: '',
	inputs: {
		url : {type:'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var tmp = await sails.helpers.crawlDetail(inputs.url),
		locationImg = "/img/product/product" + String(new Date().getTime()) + tmp.data.img.slice(tmp.data.img.lastIndexOf("."));
		await sails.helpers.downloadimg(tmp.data.img, "assets" + locationImg);	
		console.log(tmp);
		var rawResult = await Product_tmp.create({
				category_id : 1,
				url: inputs.url,
				product_name: tmp.data.name.trim(),
				price_sale : tmp.data.price_sale,
				price: tmp.data.price_discount,
				brand : tmp.data.brand,
				attribute : tmp.data.attr,
				image : locationImg,
				supplier : "",
				sku_tiki : tmp.data.sku,
			}).fetch();
		return exits.success({status : 1, message : "OK", value : rawResult});
	}


};


