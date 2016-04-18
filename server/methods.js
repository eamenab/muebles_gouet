Meteor.methods({
  sendEmail: function (email, texto) {
    check([texto, email], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    //actual email sending method
	try{
		console.log(email);
		console.log(texto);
		Email.send({
		  to: 'ernesto@amenabargroup.com',
		  from: email,
		  subject: 'Mail desde el contacto',
		  text: texto
		});
	}
	catch(e){
		console.log(e);	
	}
  }
});