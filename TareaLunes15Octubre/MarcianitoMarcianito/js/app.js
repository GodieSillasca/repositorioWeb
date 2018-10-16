var pregunta = prompt("Pregunta algo, terrícola: ");
var computadoraElige = Math.random(); //esta función toma valores entre cero y uno


var responder = function(){
	if (computadoraElige <0.20) {
	alert("Pa ke kieres saber eso jaja salu2");
	}else if (computadoraElige <= 0.40) {
		alert("Pué que sí, pué que no...");
	}else if (computadoraElige<=0.60){
		alert("Clarín cornetas");
	}else if (computadoraElige<=0.80) {
		alert("Quiero decirte al oído, tantas cosas preciosas, que estoy sintiendo por ti!!!!");
	}else if (computadoraElige<=1) {
		alert("nmms we, obvio no");
	}
}
console.log(responder());