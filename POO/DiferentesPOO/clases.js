
class Curso{

	constructor(titulo){
		this.titulo = titulo;
	}

	inscribir(usuario){
		console.log(usuario + " se ha inscrito");
	}
}

let javascript = new Curso("Curso de javascript");

console.log(javascript.titulo);
javascript.inscribir("Javier");

// existen class declaration y class expressions
/*
	Class declaration:

	class Curso{
	
	}

	Class Expression:

	let curso = class{
	
	}

	let curso = class Curso{}
*/