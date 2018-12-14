// Programa con arrow function y this, para entender el contexto en js

function executor(funcion){
	funcion();
}

let persona = {
  nombre : "Javier",
  apellido : "Santa Cruz",
  nombreCompleto : function(){
    console.log(this.nombre + " " + this.apellido)
  }
}

executor(persona.nombreCompleto.bind(persona));


//las arrow functions no modifican el valor de this