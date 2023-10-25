"use strict";

let persona = {
	nombre: "Javier",
	ocupacion: "policía",
	edad: 40,
	lugar_de_partida: "Sevilla",
	saludar: function () {
		document.write("<p>Hola, me llamo " + this.nombre + ", tengo " + this.edad + " años y soy " + this.ocupacion + "</p>");
	},
};

persona.saludar();

persona.nombre = "Claudia";
persona.ocupacion = "enfermera";
persona.edad = 33;

persona.saludar();
