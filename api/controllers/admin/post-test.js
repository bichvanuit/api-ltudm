module.exports = {


  friendlyName: 'Post test',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
	
	  var Crawler = require("crawler");
		var tmp = new Promise(function(resolve, reject) {
			var c = new Crawler({
					maxConnections : 50,
					callback : async function (error, res, done) {
						if(error){
							console.log(error);
						}else{
							var $ = res.$,
							json = $('script[type="application/ld+json"]');
							console.log(JSON.stringify(json[1].children));
							//resolve(JSON.parse(json));	
							resolve({"abg":"anh"});
						}
						done();					
					}
				});
				c.queue("https://www.lazada.vn/catalog/?q=samsung");
			});
		tmp.then(function(val) {
				return exits.success({"data":"abg"});
		});
		
	//	return exits.success({"data":"abg"});
		
		
/*	  
	  var request = require('request');
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

var options = {
    url: 'https://www.lazada.vn/catalog/',
    method: 'GET',
    headers: headers,
    qs: {'q':'samsung'}
}

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var $ = response.$,
							url = $(".c1_t2i").children();
							for(var i=0; i < url.length; i++) {
								console.log(url[i].attr("data-sku-simple"));
							}	
    }
})


	/*
	var Crawler = require("crawler");
		var tmp = new Promise(function(resolve, reject) {
			var c = new Crawler({
					maxConnections : 50,
					callback : async function (error, res, done) {
						if(error){
							console.log(error);
						}else{
							var $ = res.$,
							url = $(".product-box-list").children();
							for(var i=0; i < url.length; i++) {
								var elem = $(url[i]).children();
								console.log($(elem[0]).attr("href"));
								//break;
							}							
						}
						done();
					}
				});
				c.queue("https://tiki.vn/dien-thoai-may-tinh-bang/c1789?src=mega-menu");
			});
		tmp.then(function(val) {
				return exits.success({"data":"abg"});
		});
		*/
	/*	var Crawler = require("crawler");
		var fs = require('fs');
 
var c = new Crawler({
    encoding:null,
    jQuery:false,// set false to suppress warning message.
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        
        done();
    }
});
 
c.queue({
    uri:"https://pipe.tikicdn.com/cache/200x200/ts/product/96/a6/01/e524270351fcb4acde6a82cb352caa35.jpg",
    filename:"nodejs-1920x1200.jpg"
});
		
	

	
	
	//var stringSimilarity = require('string-similarity');
 
	//var similarity = stringSimilarity.compareTwoStrings("Điện thoại ASUS Zenfone Max Plus M1 - ZB570TL ( chính hãng )", "Điện Thoại Asus Zenfone Max Plus M1 ZB570TL (32GB/3GB) - Hàng Chính Hãng - Silver"); 
    //return exits.success({abg:similarity});

  }*/
}


};
