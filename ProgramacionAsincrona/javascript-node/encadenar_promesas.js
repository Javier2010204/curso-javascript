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

calcular().then(segundoCalculo).then(console.log);