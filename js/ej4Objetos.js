"use strict";

class Zombi {
	constructor(nombre, puntosVida, potencia) {
		this.nombre = nombre;
		this.puntosVida = puntosVida;
		this.potencia = potencia;
	}
	atacar(objetivo) {
		document.write(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño.`);
	}
}

let zombi1 = new Zombi("Hombre Lobo", 10, 50);
zombi1.atacar("Zombi Negro");
