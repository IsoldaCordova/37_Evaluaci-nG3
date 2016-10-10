// Ejercicio 2:Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres y almacena esos nombres 
// // como elementos arreglo. A continuación muestra el contenido en un mensaje.
// var nombres = ?;
// for (var i=1; i<=3 ; i++){
// 	pedir ingresar nombre;
    // guardar
    // ingresar nombre
    // guardar
    // ingresar nombre
    // guardar
// } 
// poner alerta que arroje los nombres;
var nombres = [];
for (var i=1; i<=3 ; i++){
	nombres.push(prompt('Ingresa nombre'));
} 
alert('Los nombres ingresados son:'+' '+nombres.join(' '));