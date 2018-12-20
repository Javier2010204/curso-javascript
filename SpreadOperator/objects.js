let objeto = {
	clave: 3
}

let objeto2 = {
	otraClave: 4;
}

let nuevoObjeto = {
	...objeto,
	...objeto2
}

console.log(nuevoObjeto);