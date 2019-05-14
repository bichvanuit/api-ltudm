module.exports = {


  friendlyName: 'Getcurrentdate',


  description: 'Getcurrentdate something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
	var currentdate = new Date();
	var datetime = currentdate.getFullYear() 
		+ "-" + (currentdate.getMonth()+1) 
		+ "-" + currentdate.getDate() 
		+ "-" + currentdate.getHours() 
		+ "-" + currentdate.getMinutes() 
		+ "-" + currentdate.getSeconds();
    return exits.success(datetime);
}


};

