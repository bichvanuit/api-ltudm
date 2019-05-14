/**
 * User_viewed_product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		user_id : {type : 'number'},
		product_id : {type: 'number'},
		category_id : {type: 'number'},
		create_at: { type: 'number', autoCreatedAt: true },
	},
};
