/**
 * Order.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		user_id : {type : 'number', defaultsTo : 0},
		fullname : {type : 'string'},
		phone_number : {type : 'string'},
		email : {type : 'string'},
		apartment_street_number : {type : 'string'},
		province : {type : 'number'},
		district : {type : 'number'},
		commune : {type : 'number'},
		note : {type : 'string', allowNull: true},
		invoice : {type : 'number'},
		delivery_method : {type : 'number', allowNull : true},
		payment_method : {type : 'number', allowNull : true},
		transport_fee : {type : 'string', allowNull : true},
		status : {type : 'number', defaultsTo : 0},
		create_at: { type: 'number', autoCreatedAt: true },
		update_at: { type: 'number', autoUpdatedAt: true },
	},
};

