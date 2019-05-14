module.exports = {
	friendlyName: 'Get product by id',
	description: '',
	inputs: {
		categoryId : {type : 'number'},
		productId : {type : 'number'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {
		let status=0, message=false, data = new Object(), tmp,
		category = await sails.helpers.getCategory(inputs.categoryId);
		if(category == null) {
			return exits.success({status : 0, message : "Product not found", value : false});
		}
		data["favorite"] = false;
		let input = {"category_id" : inputs.categoryId, "product_id" : inputs.productId};
		if(this.req.headers !== "undefined" && this.req.headers.authorization) {		
			let token = this.req.headers.authorization.split(" ")[1];
			sails.jwt.verify(token, sails.config.custom.tokenSecret, async function(err, decoded) {
				if(!err) {	
					tmp = await User_viewed_product.find({
						where: input,
						select: ['id'],
					});
					if(tmp.length == 0) {						
						await User_viewed_product.create({
							user_id : decoded.data,
							product_id : inputs.productId,
							category_id : inputs.categoryId
						});
					}	
					let user_id = decoded.data;
					let amount = await User_viewed_product.find({user_id : user_id});
					if(amount.length > 20) {
						await User_viewed_product.destroy({id: amount[0].id});
					}
					tmp = await Product_favorite.find({
						user_id : decoded.data,
						product_id : inputs.productId,
						category_id : inputs.categoryId
					});
					if(tmp.length > 0) {
						data["favorite"] = true;
					}
				}			
			});
		}
		let product_search = await Product_search.find(input);
		if(product_search.length) {
			await Product_search.update(input).set({count : product_search[0].count + 1});
		} else {
			await Product_search.create(input);
		}				
		
		var GET_DETAIL_PRODUCT_SQL = "SELECT t.*, m.marketplace, m.marketplace_url FROM " + category + " t INNER JOIN marketplace m ON t.marketplace_id = m.id WHERE t.id=" + inputs.productId,
		result = await sails.sendNativeQuery(GET_DETAIL_PRODUCT_SQL);
		if(result.rows.length == 0) {
			return exits.success({status : 0, message : "Product not found", value : false});
		} 
		data["product"] = result.rows[0];
		var main_attr = Object.entries(data["product"]).slice(10, 21);
		data["main_attr"] = main_attr.filter(item => { 
			return (item.indexOf(null) == -1 && item.indexOf("Đang cập nhật") == -1);
		});
		tmp = await Product_evaluate.find({product_id : inputs.productId, category_id : inputs.categoryId});
		data["evaluate"] = [];
		if(tmp.length > 0) {
			for(let i in tmp) {
				t = await sails.sendNativeQuery("SELECT e.comment, e.star, u.username, u.fullname FROM Product_evaluate e INNER JOIN Users u ON e.user_id = u.id WHERE e.product_id=" + inputs.productId + " AND e.category_id=" + inputs.categoryId + " AND e.user_id=" + tmp[i].user_id);		
				data["evaluate"].push(t.rows[0]);
			}
		}
		return exits.success({status : 1, message : true, value : data});
	}
};
