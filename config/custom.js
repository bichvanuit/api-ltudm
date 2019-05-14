/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
	 rememberMeCookieMaxAge: 30*24*60*60*1000,
	 tokenSecret: "PvulWRc3SdGH9MQvp2R0",
	 oAuth : {
		 "facebook" : {
			 "clientID": "311527799575459",
			 "clientSecret": "2acc6bd3919ba201e5e2b4896f59cc6f",
		 }
	 }
};
