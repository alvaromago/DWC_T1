"use strict";

class Persona {
	constructor(nombre, ocupacion, edad) {
		this.nombre = nombre;
		this.ocupacion = ocupacion;
		this.edad = edad;
	}
	saludar() {
		document.write(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.ocupacion}.`);
	}
}

let persona1 = new Persona("Claudia", "bombera", 33);
persona1.saludar();
