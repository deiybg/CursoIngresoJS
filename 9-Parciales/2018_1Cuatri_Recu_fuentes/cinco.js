function mostrar()
{

	var diaSemana;
	diaSemana = prompt("Ingrese un dia de la semana: ");

	switch(diaSemana)
	{
		case("lunes"):
		case("martes"):
		case("miercoles"):
		case("jueves"):
		case("viernes"):
		alert("A trabajar");
		break;
		case("sabado"):
		case("domingo"):
		alert("Buen finde");
		default:
		alert("El dia ingresado no es valido");







	}
}
