// EJERCICIO 3
// Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function esPalindromo(palabra){
	var frase = frase.replace( /\s /g," ");
	for (var i = 0; i < frase.length; i++) {
		if(frase[i]===frase[frase.length-i+1]
		var x = frase[i].toLowerCase();
		var y = frase[frase.length-(i+1)].toLowerCase();
		if(x !== y){
			"no es palindromo"
		}
		"es palindromo"
	}
}
isPalindromo = prompt('agrega frase');