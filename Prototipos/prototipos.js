let animal = Object.create(null);

animal.vivo = true;

animal.estaVivo = function(){
	if(this.vivo){
		console.log("esta vivo");
	}else{
		console.log("esta muerto :(");
	}
}

let perro = Object.create(animal);

perro.estaVivo();

console.log(perro.edad);