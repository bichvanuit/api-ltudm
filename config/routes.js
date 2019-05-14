/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

	//#Admin - Product
	'GET /admin/get-all-camera': { action: 'admin/product/get-all-camera' },
	'GET /admin/get-all-laptop': { action: 'admin/product/get-all-laptop' },
	'GET /admin/get-all-phone': { action: 'admin/product/get-all-phone' },
	'GET /admin/get-detail-product' : {action : 'admin/product/get-detail-product'},
	'POST /admin/edit-attr-product': { action: 'admin/product/edit-attr-product' },

	//#Admin - Marketplace
	'POST /admin/marketplace': { action: 'admin/marketplace/marketplace' },
	'GET /admin/marketplace/get-all-marketplace': { action: 'admin/marketplace/get-all-marketplace' },
	'GET /admin/marketplace/get-detail-marketplace': { action: 'admin/marketplace/get-detail-marketplace'},
	'POST /admin/marketplace/update-market-place': { action: 'admin/marketplace/update-market-place' },
	
	//#Admin - System
	'POST /system/update-product': { action: 'admin/system/update-product' },
	'GET /system/get-list-product-tmp' : {action : 'admin/system/get-list-product-tmp'},
	'GET /system/get-detail-product-tmp': { action: 'admin/system/get-detail-product-tmp' },
	'POST /system/approve-product': { action: 'admin/system/approve-product' },
	'POST /system/delete-product': { action: 'admin/system/delete-product' },
	'POST /system/switch-to-product-error': { action: 'admin/system/switch-to-product-error' },
	'GET /system/get-product-error': { action: 'admin/system/get-product-error' },
	'GET /system/get-detail-product-error': { action: 'admin/system/get-detail-product-error' },
	
	'GET /test': { action: 'test' },
	'POST /test1': { action: 'test1' },	
	
	//#Admin - Cart
	'POST /cart/get-cart': { action: 'cart/get-cart' },

	//Admin - Order
	'GET /admin/order/get-all-order': { action: 'admin/order/get-all-order' },
	// 'GET /admin/delete-order': { action: 'admin/order/delete-order' },
	// 'POST /admin/search-order' : {action : 'admin/order/search-order'},
	// 'POST /admin/confirm-order': { action: 'admin/order/confirm-order' },
	'GET /admin/order/get-detail-order/:id': { action: 'admin/order/get-detail-order' },

	//Admin - Order
	'GET /admin/account/get-all-user': { action: 'admin/account/get-all-user' },

	//Admin - Customer
	'GET /admin/customer/get-all-customer': { action: 'admin/customer/get-all-customer' },
	
	//#Client - Product
	'GET /product/search/:q': { action: 'product/search' },
	//'GET /product/get-all-product': { action: 'product/get-all-product' },
	'GET /product/get-detail-product': { action: 'product/get-detail-product' },
	'GET /product/get-product-of-marketplace': { action: 'product/get-product-of-marketplace' },
	'GET /product/get-product-recent': { action: 'product/get-product-recent' },		
	'GET /product/get-product-hot': { action: 'product/get-product-hot' },
	'GET /product/get-new-product': { action: 'product/get-new-product' },	
	'GET /product/get-hot-key': { action: 'product/get-hot-key' },
	
	
	//#Client - User
	'POST /customer/login': { action: 'customer/login' },
	'POST /customer/register': { action: 'customer/register' },
	'GET /customer/get-user' : { action: 'customer/get-user'},
	'GET /customer/get-viewed-product': { action: 'customer/get-viewed-product' },
	'GET /customer/get-purchased-product': { action: 'customer/get-purchased-product' },
	'GET /customer/get-order': { action: 'customer/get-order' },
	'POST /customer/active-account': { action: 'customer/active-account' },
	'POST /customer/update-profile': { action: 'customer/update-profile' },
	'POST /customer/login-with-facebook': { action: 'customer/login-with-facebook' },
	'POST /customer/login-with-google': { action: 'customer/login-with-google' },
	'POST /customer/add-to-cart': { action: 'customer/add-to-cart' },
	'POST /customer/post-product-viewed': { action: 'customer/post-product-viewed' },
	'GET /customer/get-product-evaluate': { action: 'customer/get-product-evaluate' },
	'POST /customer/post-favorite-product': { action: 'customer/post-favorite-product' },
	
	//#Client - Location
	'GET /location/get-location': { action: 'location/get-location' },
	
	//#Client - Order
	'POST /order/post-order': { action: 'order/post-order' },
	'GET /order/get-order': { action: 'order/get-order' },
	'POST /order/look-up-order': { action: 'order/look-up-order' },
	'POST /order/update-order': { action: 'order/update-order' },
	'GET /order/get-cart': { action: 'order/get-cart' },
	'POST /order/update-cart': { action: 'order/update-cart' },
	'GET /order/get-order-success': { action: 'order/get-order-success' },
	'GET /order/get-order-detail/:id': { action: 'order/get-order-detail' },
	
	//#Client - Evaluate
	
	'POST /evaluate/post-evaluate': { action: 'evaluate/post-evaluate' },
	'GET /evaluate/get-evaluate': { action: 'evaluate/get-evaluate' },
	

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
