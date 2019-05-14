module.exports = {
	friendlyName: 'Downloadimg',
	description: 'Downloadimg something.',
	inputs: {
		url : {type : 'string'},
		save : {type : 'string'}
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		const puppeteer = require('puppeteer');
		const fs = require('fs');
		const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
		const page = await browser.newPage();
		var viewSource = await page.goto(inputs.url);
			fs.writeFile(inputs.save, await viewSource.buffer(), function(err) {
			if(err) {
				return console.log(err);
			}
				console.log("The file was saved!");
			});
		return exits.success();

	}


};

