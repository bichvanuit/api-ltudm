module.exports = {
	friendlyName: 'Get hot key',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let currentTime = new Date().getTime();
		let rawResult = await Search_trend.find({ update_at: { '>': currentTime-(14*24*60*60*1000)}}).sort('count DESC').limit(10);
		return exits.success({status : 1, message: true, value: rawResult});
	}
};
