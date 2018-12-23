function calcular(){
	return new Promise((resolve, reject)=>{
		setTimeout(resolve,400,10);
	});
}

function segundoCalculo(numero){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve, 2000, 'segunda promesa');
	});
}

function tercerCalculo(numero){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve, 4000, 'tercera promesa');
	});
}

function cuartaPromesa(numero){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve, 40000, 'cuarta promesa');
	});
}

calcular().then(segundoCalculo).then(tercerCalculo).then(console.log);