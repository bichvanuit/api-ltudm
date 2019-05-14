let passport = require('passport');
let FacebookTokenStrategy = require('passport-facebook-token');
let GooglePlusTokenStrategy = require('passport-google-plus-token');

passport.use('facebookToken', new FacebookTokenStrategy({
	clientID: "311527799575459",
	clientSecret : "2acc6bd3919ba201e5e2b4896f59cc6f",
}, async (accessToken, refreshToken, profile, done) => {
	try {
		profile = profile._json;
		let obj = {
			username : profile.email,
			fullname : profile.name,
			password : profile.id,
			status : 1,
			type: 1,
		};	
		let user = await Users.find({ username : obj.username });
		let result = null;
		if( user.length == 0 ) {
			result = await Users.create(obj).fetch();			
		} else {			
			let type = user[0].type.split(",");
			if(type.indexOf("1") == -1) {
				type.push("1");
				result = await Users.update({username : obj.username}).set({type : type.join(",")}).fetch();
			} else {
				result = user[0];
			}
		}				
		return done(null, result, { message: "success"});		
	} catch (error) {
		return done(null, null, { message: 'Xảy ra lỗi, vui lòng thử lại'});	
	}
}));


passport.use('googleToken', new GooglePlusTokenStrategy({
	clientID: "643174772666-6vk6m4qiu19adj5fe728qmg933fc4b1m.apps.googleusercontent.com",
	clientSecret : "ELkFyBQ4tMG-PQIKltg7DNCw",
}, async (accessToken, refreshToken, profile, done) => {
	try {
		profile = profile._json;
		let obj = {
			username : profile.emails[0].value,
			fullname : profile.displayName,
			password : profile.id,
			status : 1,
			type: 2,
		};	
		let user = await Users.find({ username : obj.username });
		let result = null;
		let message = "success";
		if( user.length == 0 ) {
			result = await Users.create(obj).fetch();			
		} else {			
			let type = user[0].type.split(",");
			if(type.indexOf("2") == -1) {
				type.push("2");
				result = await Users.update({username : obj.username}).set({type : type.join(",")}).fetch();
			} else {
				result = user[0];
			}
		}				
		return done(null, result, { message: message});
		
	} catch (error) {
		return done(null, null, { message: 'Xảy ra lỗi, vui lòng thử lại'});	
	}	
}));


