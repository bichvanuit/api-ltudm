module.exports = {
	friendlyName: 'Get all order',
	description: '',
	inputs: {
		// page: { type: 'number' },
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let result = [],
		order_detail = await Order_detail.find();
		for(var i in order_detail){
			var category = await sails.helpers.getCategory(order_detail[i].category_id);
			var rawResult = await sails.sendNativeQuery("SELECT o.order_id, o.id, cate.category_name, c.product_name, o.amount FROM " + category + " c, order_detail o, category cate WHERE o.category_id = cate.id AND c.id=o.product_id");
			result.push(rawResult.rows);
		}
		return exits.success({
			status: 1,
			message: true,
			value: result
			// value: {
			// 	total: result.length,
			// 	currentPage: inputs.page,
			// 	data: result.slice((inputs.page - 1) * 10, inputs.page * 10),
			// }
		});
	}
};

// module.exports = {
// 	friendlyName: 'Get all order',
// 	description: '',
// 	inputs: {
// 		// page: { type: 'number' },
// 	},
// 	exits: {
// 	},
// 	fn: async function (inputs, exits) {
// 		let result = [],
// 		order = await Orders.find();
// 		return exits.success({
// 			status: 1,
// 			message: true,
// 			value: order
// 			// value: {
// 			// 	total: result.length,
// 			// 	currentPage: inputs.page,
// 			// 	data: result.slice((inputs.page - 1) * 10, inputs.page * 10),
// 			// }
// 		});
// 	}
// };

