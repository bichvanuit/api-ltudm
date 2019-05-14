module.exports = {
	friendlyName: 'Crawl link',
	description: '',
	inputs: {
		url : {type : 'string'}
	},
	exits: {
	},
	fn: async function (inputs, exits) {   
		var Crawler = require("crawler"), arrResult = [], tmp = null;
		var tmp = new Promise(function(resolve, reject) {
			var c = new Crawler({
					maxConnections : 50,
					callback : async function (error, res, done) {
						if(error){
							console.log(error);
						} else {
							var $ = res.$;
							$(".product-box-list .product-item").each(function() {
								tmp["name"] = $(this).attr("data-title");
								tmp["price_sale"] = $(this).attr("data-price");	
								tmp["crawl_id"] = $(this).attr("data-seller-product-id");
								tmp["link"] = $(this).children("a").attr("href");
								arrResult.push(JSON.stringify(tmp));
							});
							resolve(arrResult);
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

