module.exports = {
	friendlyName: 'Crawl detail',
	description: '',
	inputs: {
		url : {type : 'string'},	
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var Crawler = require("crawler");
		var tmp = new Promise(function(resolve, reject) {
			var c = new Crawler({
					maxConnections : 50,
					callback : async function (error, res, done) {
						if(error){
							console.log(error);
						} else {
							var $ = res.$,
							name = $("#product-name").text(), sku = null,	
							price =  $("#span-list-price").text().replace(/[^0-9]/g, ""),
							img = $("#product-magiczoom").attr("src"),
							detail = $("#chi-tiet > tbody > tr > td"),
							marketplace = $("#seller-list").text().trim(),
							manufacturer = $(detail[1]).text().trim(), attr = new Object(), tmp1 = "", tmp2 = "";
							for(var i = 0; i < detail.length; i = i + 2) {
								tmp1 = $(detail[i]).text().trim();
							if(tmp1 == "Thương hiệu" || tmp1 == "SKU") {
									continue;
								}
								tmp2 = $(detail[i+1]).text().trim();
								tmp2 = tmp2.replace(/\"/g, " ");
								tmp2 = tmp2.replace(/\:/g, " ");
								attr[tmp1] = tmp2;								
							}								
							resolve({name:name,price:price, manufacturer : manufacturer, attr : JSON.stringify(attr), img : img, marketplace: marketplace});
						}
						done();
					}
				});
				c.queue(inputs.url);
			});
		tmp.then(function(val) {
				return exits.success(val);
		});
	}
};

