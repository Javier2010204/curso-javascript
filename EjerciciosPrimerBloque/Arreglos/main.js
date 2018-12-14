let arreglo = ['ruby', 'java', 'python', 'javaScript', 'go', 'c#'];
let numeros = [2,3,4,54,354,654,322,345,753,235,678]

arreglo = arreglo.filter((el) => el != 'c#');

let el = arreglo.find((el) => el=='javaScript');

console.log(el);

arreglo.forEach(function(elemento){
	console.log(elemento);
});

numeros = numeros.filter((el)=> (el%2)==0);