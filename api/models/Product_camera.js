/**
 * Product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		category_id: { type: 'number'},
		marketplace_id	: { type: 'number'},
		product_name: { type: 'string'},
		url_product: { type: 'string'},
		url : {type : 'string'},
		price_sale: {type : 'number'},
		price: { type: 'number'},
		manufacturer : {type : 'string'},		
		image: { type: 'string'},
		origin : { type: 'string', allowNull: true},
		camera : {type : 'string', allowNull: true},
		resolution : {type : 'string', allowNull: true},
		chip: { type: 'string', allowNull: true},	
		graphic_card : { type: 'string', allowNull: true},	
		operating_system : { type: 'string', allowNull: true},	
		RAM : {type : 'string', allowNull: true},
		ROM : {type : 'string', allowNull: true},
		screen_size : {type : 'string', allowNull: true},
		front_camera : {type : 'string', allowNull: true},
		after_camera : {type : 'string', allowNull: true},	
		attribute: { type: 'string'},
		create_at: { type: 'number', autoCreatedAt: true },
	},
};






