let p1 = new Promise( (resolve, reject)=>{
	setTimeout(resolve, 500, 'hola mundo');
});

let p2 = new Promise( (resolve, reject)=>{
	setTimeout(resolve, 500, 'hola desde javascript');
});

//let p3 = Promise.reject();

let saluda = () => {
	console.log('Hola a todos');
}

Promise.all([p1,p2]).then(resultados=>{
	console.log(resultados);
}).catch( ()=> {
	console.log('falle :( ')
});