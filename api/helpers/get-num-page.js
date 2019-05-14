module.exports = {
	friendlyName: 'Get num page',
	description: '',
	inputs: {
		url : {type : 'string'},
	},
	exits: {
		success: {
			outputFriendlyName: 'Num page',
			outputType: 'ref'
		},
	},
	fn: async function (inputs, exits) {
		var Crawler = require("crawler"), arrResult = [], tmp=null;
		var tmp = new Promise(function(resolve, reject) {
			var c = new Crawler({
					maxConnections : 50,
					callback : async function (error, res, done) {
						if(error){
							console.log(error);
						} else {
							var $ = res.$,
							numPage = Math.ceil(parseInt($("h4[name='results-count']").text().replace(/[^0-9]/g, ""))/24);
							resolve(numPage);
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



