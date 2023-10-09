let str = prompt("Introduce una frase: ");
let maxlength = Number(prompt("Introduce la longitud máxima: "));

function truncar(str, maxlength) {
	if (str.length > maxlength) {
		alert(str.slice(0, maxlength - 1) + "…");
	} else {
		alert(str);
	}
}

truncar(str, maxlength);
