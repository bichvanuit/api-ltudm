/**
 * Category.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		category_name: { type: 'string'},
		category_url: { type: 'string'},
		attribute : {type : 'string'},
		description : {type : 'string'},
		create_at : {type: 'ref', columnType: 'datetime'},
		update_at : {type: 'ref', columnType: 'datetime'},
	},
};

