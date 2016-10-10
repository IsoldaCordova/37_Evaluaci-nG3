// Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos
// variables: tijera, piedra y papel.
// Elegir piedra, papel o tijera 
// guardar seleccion
// elegir piedra, papel o tijera
// guardar seleccion
// si elije tijera y papel, pierde papel. Si elije tijera y piedra, pierde tijera
//si elije piedra y papel, pierde piedra. 
// si son iguales ambas, hay empate
var tijera= 'tijera';
var piedra='piedra';
var papel='papel';
for (var i = 0; i < 3; i++) {
	var uno = prompt('Elegir papel, tijera, piedra');
	var dos = prompt('Elegir papel, tijera, piedra');
	if ((uno == papel && dos == tijera) || (uno == tijera && dos == papel)){
	console.log('Gana Tijera y Pierde Papel');
	} else if ((uno == papel && dos == piedra)||(uno == piedra && dos == papel)){
	console.log('Papel Gana y Piedra Pierde');
	}else if((uno == tijera && dos == piedra)||(uno == piedra && dos == tijera)){
	console.log('Gana Piedra y Pierde Tijera');
	}else {
	console.log('EMPATE, no seas tramposo!');
	}
}