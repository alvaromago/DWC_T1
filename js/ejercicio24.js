let edad = Number(prompt("Dime tu edad: "));

function comprobarEdad(edad) {
	return edad > 18 || confirm("¿Tienes el permiso de tus padres para acceder a esta página?");
}

comprobarEdad();
