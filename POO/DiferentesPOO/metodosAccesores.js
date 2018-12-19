class Usuario{

	constructor(nombre){
		this._name = nombre;
	}

	get name(){
		return this._name.charAt(0).toUpperCase() + this._name.slice(1);
	}

	set name(nombre){
		this._name = nombre;
	}
}

let user = new Usuario("Javier");

user.name = "santa";

console.log(user.name);