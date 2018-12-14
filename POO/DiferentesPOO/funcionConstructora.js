function Curso(titulo){
	this.titulo = titulo;

	this.inscribir = function(usuario){
		console.log("Se inscribio a " + usuario);
	}
}

let cursoJavaScript = new Curso("Curso de JavaScript");
let cursoRuby = new Curso("Curso Ruby");

console.log(cursoRuby.titulo);