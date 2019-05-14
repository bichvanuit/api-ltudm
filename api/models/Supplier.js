/**
 * Supplier.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		supplier_name : {type: 'string'},
		category_id : {type: 'number'},
		link : {type: 'string'},
		create_at : {type: 'ref', columnType: 'datetime'},
		update_at : {type: 'ref', columnType: 'datetime'},
		
	},
};

