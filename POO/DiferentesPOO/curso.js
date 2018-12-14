let curso = {
	titulo: 'Curso profesional de Javascript',
	duracion: 2.2,
	formato: 'video',
	bloques: ['introduccion', 'funciones', 'POO', 'despedida'],
	inscribir: function(usuario){
		console.log(usuario + ' ahora esta inscrito');
	}
}

//imprimir el valor de una propiedad
console.log(curso.titulo);


//ejecutar metodo
curso.inscribir('Javier');