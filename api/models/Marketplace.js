/**
 * Marketplace.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		marketplace : {type: 'string'},
		marketplace_image : {type : 'string'},
		marketplace_url : {type : 'string'},
		member_from : {type : 'string', allowNull: true},
		type : {type : 'string', allowNull: true},
		status : {type : 'number', defaultsTo : 1},
	},
};

