if (Meteor.isClient) {
	$('.carousel').carousel({
		interval: 5000 //changes the speed
	})
}

if (Meteor.isServer) {
	Meteor.startup(function () {
	// code to run on server at startup
	});
}
