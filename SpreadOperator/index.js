let numeros = [2,3,5];

function sumar(n1,n2,n3){
	return n1 + n2 + n3;
}

let resultado = sumar.apply(this,numeros);

let resultado_spread = sumar(...numeros);