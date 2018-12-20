function User(){}

User.prototype.saludar = function(){
	console.log("hola");
}

function Admin(){

}

Admin.prototype = new User();

let javier = new Admin();

javier.saludar();