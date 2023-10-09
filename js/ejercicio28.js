let str = prompt("Introduce una cadena: ");

function checkSpam(str) {
	if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) {
		alert(true);
	} else {
		alert(false);
	}
}

checkSpam(str);
