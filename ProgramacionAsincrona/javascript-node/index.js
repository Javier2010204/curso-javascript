const request = require('request');

request('http://google.com', function(){
	console.log('termine la peticion al servidor');
});

console.log('yo voy despues en el codigo');