function removeAccent(str) {  
	str= str.toLowerCase();  
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");  
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");  
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");  
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");  
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");  
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");  
	str= str.replace(/đ/g,"d");  
	str = str.replace(/ /g,'');
	str = str.trim();
	return str;  
}
module.exports = {
	friendlyName: 'Validator',
	description: 'Validator something.',
	inputs: {
		params : {type : 'ref'},
		rules : {type : 'ref'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {  
		var validator = require("validator");
		let default_messages = {
			'required': 'Thông tin này là bắt buộc.',			
			'email' : 'Xin nhập đúng định dạng email.',						
			'numeric': 'Xin nhập chữ số.',
			'letter' : 'Xin nhập chữ.',		
		};
		var error = {};
		var params = inputs.params;
		var rules = inputs.rules;
		for(let key in params) {			
			if(typeof rules[key] !== "undefined") {
				params[key] += "";
				let rule = rules[key].split("|");
				for(let i in rule) {
					switch(rule[i]) {
						case "required" :
							if(validator.isEmpty(params[key])) {
								error[key] = default_messages[rule[i]];
							}
							break;
						case "email":
							if(!validator.isEmail(params[key])) {
								error[key] = default_messages[rule[i]];
							}
							break;
						case "numeric":
							if(!validator.isDecimal(params[key])) {
								error[key] = default_messages[rule[i]];
							}
							break;
						case "letter":
							if(!validator.isAlpha(params[key])) {
								error[key] = default_messages[rule[i]];
							}
							break;	
					}
				}				
			}
		}
		return exits.success(error);
	}
};

