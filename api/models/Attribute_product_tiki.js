/**
 * Attribute_product_tiki.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		attribute_name : {type : 'string'},
		keyword : {type : 'string'},
		type : {type : 'number'},
	},
};

