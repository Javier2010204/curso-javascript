class Usuario{

	constructor(permisos="lectura"){
		this.permisos = permisos;
	}

	static crearAdministrador(){
		let user = new Usuario("administrador");
		return user;
	}
}

let administrador = Usuario.crearAdministrador();