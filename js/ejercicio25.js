let a = Number(prompt("Dame un primero número: "));
let b = Number(prompt("Dame un segundo número: "));

function comprobarMinimo(a, b) {
	if (a > b) {
		alert(b);
	} else if (a < b) {
		alert(a);
	} else if (a == b) {
		alert("Son iguales");
	}
}

comprobarMinimo(a, b);
