let user = String(prompt("Login: "));
let password;
if (user == "Admin") {
	password = String(prompt("Contraseña: "));
	if (password == "TheMaster") {
		alert("Bienvenido!");
	} else if (password == "" || password == null) {
		alert("Cancelado.");
	} else {
		alert("Contraseña incorrecta");
	}
} else if (user == "" || user == null) {
	alert("Cancelado.");
} else {
	alert("No te conozco.");
}
