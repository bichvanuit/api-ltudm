module.exports = {
	friendlyName: 'Get new product',
	description: '',
	inputs: {
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		var currentTime = new Date().getTime();
		let limit = 5, skip = 0;
		if(this.req.param('page') != undefined) {
			limit = 20;
			skip = (this.req.param('page') - 1) * 20;
		}
		var product_laptop = await Product_laptop.find({ create_at: { '>': currentTime-(14*24*60*60*1000)}}).sort('id DESC').skip(skip).limit(limit),
		product_camera = await Product_phone.find({ create_at: { '>': currentTime-(14*24*60*60*1000)}}).sort('id DESC').skip(skip).limit(limit),
		product_phone = await Product_camera.find({ create_at: { '>': currentTime-(14*24*60*60*1000)}}).sort('id DESC').skip(skip).limit(limit),
		result = product_laptop.concat(product_camera).concat(product_phone);
		result = result.sort(function(a, b){
			return +a.create_at < +b.create_at;
		});
		return exits.success({status:1, message:true, value:result.slice(0, limit)});
	}
};
