/**
 * Admin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

	id: { type: 'number', autoIncrement: true},
	username: { type: 'string'},
	password: {type : 'string'},
	create_at : {type: 'ref', columnType: 'datetime'},

  },

};

