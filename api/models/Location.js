/**
 * Location.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		commune_name : {type : 'string'},
		district_id : {type : 'number'},
		district_name : {type : 'string'},
		province_id : {type : 'number'},
		province_name : {type : 'string'},
	},
};

