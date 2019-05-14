/**
 * Search_trend.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		keyword: {type: 'string'},
		count: {type: 'number',defaultsTo : 1},
		create_at: { type: 'number', autoCreatedAt: true },
		update_at: { type: 'number', autoUpdatedAt: true },
	},
};

