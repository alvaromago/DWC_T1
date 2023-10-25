"use strict";

class Arma {
	constructor(nombre, poder, munición) {
		this.nombre = nombre;
		this.poder = poder;
		this.munición = munición;
	}
	atacar(objetivo) {
		document.write(
			`${objetivo} eres mi objetivo, te voy a atacar con un ${this.nombre} que tiene ${this.poder} de poder y ${this.munición} balas.`
		);
	}
}

let arma1 = new Arma("rifle", 20, 50);
arma1.atacar("Zombi");
