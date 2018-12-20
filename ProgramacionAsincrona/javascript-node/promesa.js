const rq = require('request-promise');

rq('http://google.com')
	.then(function(html){
		console.log('Peticion a Google terminada');
	}).catch(function(err) {
		console.log(err);
	})