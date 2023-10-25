"use strict";

let persona = {
	nombre: "Javier",
	ocupacion: "policía",
	edad: 40,
	lugar_de_partida: "Sevilla",
	saludar: function () {
		document.write("Hola, me llamo " + this.nombre + ", tengo " + this.edad + " años y soy " + this.ocupacion);
	},
};

persona.saludar();
