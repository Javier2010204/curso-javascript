// Programa con arrow function y this, para entender el contexto en js

let persona = {
  nombre : "Javier",
  apellido : "Santa Cruz",
  nombreCompleto : function(){
    setTimeout(()=>{
      console.log(this.nombre + " " + this.apellido);
    },1000)
  }
}

persona.nombreCompleto();

//las arrow functions no modifican el valor de this