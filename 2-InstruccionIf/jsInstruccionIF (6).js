function mostrar()
{

	var edad;

	edad = document.getElementById('edad').value;

	if (edad<13) {

		alert("la persona es un niño");
	} else {

		if (edad >= 13 && edad<=17) {

			alert("la persona es un adolescente");
		} else {

			alert("la persona es mayor de edad");
		}
	}


}


