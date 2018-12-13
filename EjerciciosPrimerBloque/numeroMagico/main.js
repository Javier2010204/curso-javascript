let numero = parseInt(Math.random() * (15 - 1) + 1);
let respuestaUsuario;
let INTENTOS = 5;

console.log(numero);

for (var i = 0; i < INTENTOS; i++) {
	respuestaUsuario = parseInt(prompt("adivina un numero del 1 al 15"));
	if(respuestaUsuario == numero){
		console.log("felicidades ganaste");
		INTENTOS = 0;
		break;
	}else if(respuestaUsuario > numero){
		console.log("vuelve a intentarlo");
		console.log("pista: el numero es menor");
		INTENTOS -= 1;
	}else{
		console.log("vuelve a intentarlo");
		console.log("pista: el numero es mayor");
		INTENTOS -= 1;
	}
}

