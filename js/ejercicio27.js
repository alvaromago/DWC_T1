let str = prompt("Introduce una palabra: ");

function laPrimeraMayuscula(str) {
	alert(str.charAt(0).toUpperCase() + str.slice(1));
}

laPrimeraMayuscula(str);
