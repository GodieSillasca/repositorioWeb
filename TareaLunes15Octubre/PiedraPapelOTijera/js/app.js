var usuarioElige = prompt("Escoge piedra, papel o tijera, men");
var computadoraElige = Math.random(); //esta función toma valores entre cero y uno
if (computadoraElige <0.34) {
	computadoraElige="piedra";
}else if (computadoraElige <= 0.67) {
	computadoraElige="tijera";
}else{
	computadoraElige="papel";
}

var comparar = function(eleccion1,eleccion2){
	if (eleccion2===eleccion1) {
		return "Empate OwO";
	}
	else if (eleccion1==="piedra") {
		if (eleccion2==="papel") {
			alert("Te mató el papel");
		}else{
			alert("Mataste las tirejas bro 3:");
		}
	}else if (eleccion1==="papel") {
		if (eleccion2==="tijera") {
			alert("Te mataron las tijeras");
		}else{
			alert("Mataste a la piedra bro 3:");
		}
	}else if (eleccion1==="tijera") {
		if (eleccion2==="piedra") {
			alert("Te mató la piedra");
		}else{
			alert("Mataste al papel bro 3:");
		
		}
	}else{alert("nmms we, no seas tramposo");
}
console.log(comparar(computadoraElige,usuarioElige));