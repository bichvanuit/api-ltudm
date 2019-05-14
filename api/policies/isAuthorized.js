/**
* isAuthorized
*
* @description :: Policy to check if user is authorized with JSON web token
* @help :: See http://sailsjs.org/#!/documentation/concepts/Policies
*/
 
module.exports = async function (req, res, next) {
    var token;
    if (req.headers && req.headers.authorization) {		
        var parts = req.headers.authorization.split(' ');
        if (parts.length == 2) {
            var scheme = parts[0],
            credentials = parts[1];
 
            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
        } else {
            return res.json({status: 0, message: "Wrong token", value: false});
        }
    } else if (req.param('token')) {
            token = req.param('token');
            delete req.query.token;
    } else {
           return res.json({status: 0, message: "Not found token", value: false});
    }
	sails.jwt.verify(token, sails.config.custom.tokenSecret, function(err, decoded) {
		if(err || decoded.data == undefined)  {
			return res.json({status: 0, message: err, value: false});
		}		
		req.token = decoded.data; // This is the decrypted token or the payload you provided		
		next();		
	});
};