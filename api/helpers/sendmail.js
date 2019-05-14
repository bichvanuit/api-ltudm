module.exports = {
	friendlyName: 'Sendmail',
	description: 'Sendmail something.',
	inputs: {
		contentMail : {type: 'string'},
		title : {type : 'string'},
		to : {type : 'string'},
	},
	exits: {

	},
	fn: async function (inputs, exits) {
		var nodemailer = require('nodemailer');
		var smtpTransport = require('nodemailer-smtp-transport');
		var transporter = nodemailer.createTransport(smtpTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
				user: 'bichvanct2@gmail.com',
				pass: '02082016'
			}
		}));

		var mailOptions = {
			from: 'bichvanct2@gmail.com',
			to: inputs.to,
			subject: inputs.title,
			html: inputs.contentMail,
		};

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		
		return exits.success();
	}
};

