class User{
	constructor(nombre){
		this.nombre = nombre;
	}

	saludar(){
		console.log("hola " + this.nombre);
	}
}

class Admin extends User{
	constructor(nombre){
		super(nombre);
	}

	saludar(){
		super.saludar();
		console.log("Bienvenido al panel del administrador");
	}
}

let admin = new Admin("Javier");
admin.saludar();