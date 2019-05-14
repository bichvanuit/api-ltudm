/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

	'customer/*': 'isAuthorized',	
	'order/*' : 'isAuthorized',	
	'evaluate/*' : 'isAuthorized',
	'order/look-up-order' : true,
	'*' : true,
	'customer/active-account' : true,
	'customer/login' : true,
	'customer/login-with-facebook' : true,
	'customer/login-with-google' : true,
	'customer/register' : true,
	'admin/*' : true,

};
