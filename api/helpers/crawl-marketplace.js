module.exports = {
	friendlyName: 'Crawlsupplier',
	description: 'Crawlsupplier something.',
	inputs: {
		url : {type : 'string'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var Crawler = require("crawler"), arrResult = [], name=null;
		var tmp = new Promise(function(resolve, reject) {
			var c = new Crawler({
					maxConnections : 50,
					callback : async function (error, res, done) {
						if(error){
							console.log(error);
						}else{
							var $ = res.$;
							$("#collapse-seller .list-group .list-group-item  a").each(async function() {		
								name = $(this).text();
								arrResult.push(name.trim().slice(0, name.indexOf("(") - 1));
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

