/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
var sha256 = require('js-sha256');
module.exports = {
	attributes: {
		id: { type: 'number', autoIncrement: true},
		username  : {type : 'string'},
		password : {type : 'string', allowNull: true},
		fullname  : {type : 'string', allowNull: true},
		sex : {type : 'number', defaultsTo : 1},
		day : {type : 'string', defaultsTo : "01"},
		month : {type : 'string', defaultsTo : "01"},
		year : {type : 'string', defaultsTo : "1997"},	
		type : { type: 'string'},
		status : {type : 'number', defaultsTo : 0},
		create_at: { type: 'number', autoCreatedAt: true },
		update_at: { type: 'number', autoUpdatedAt: true },
	},
	
	beforeCreate : function (values, next) {
		if(values.fullname == null) {
			values.fullname = values.username.slice(0, values.username.indexOf("@"));
		}	
		values.password = sha256(values.password) + "PvulWRc3SdGH9MQvp2R0";
		next();
		/*bcrypt.genSalt(10, function (err, salt) {
			if(err) return next(err);
			bcrypt.hash(values.password, salt, function (err, hash) {
				if(err) return next(err);
				values.password = hash;
				next();
			})
		})*/
	},
	
	comparePassword : function (pass, user, cb) {
		let tmp = sha256(pass) + "PvulWRc3SdGH9MQvp2R0";
		if(tmp = user.password) {
			cb(null, true);
		} else {
			cb(err);
		}
       /* bcrypt.compare(pass, user.password, function (err, match) {
        if(err) cb(err);
            if(match) {
                cb(null, true);
            } else {
                cb(err);
            }
        })*/
    }


};

