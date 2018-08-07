function mostrar()
{
	var nota;
	nota = prompt("Ingrese una nota: ");

	switch(nota)
	{
		case("0"):
		case("1"):
		case("2"):
		case("3"):
			alert("La proxima se puede");
			break;
		case("4"):
		case("5"):
		case("6"):	
			if (nota<5) 
			{
				alert("Raspando" + " debes preocuparte mas");
			}
			else
			{
				alert("raspando");
			}
			break;
		case("7"):
		case("8"):
		case("9"):	
		case("10"):	
			if (nota>"8") 
			{
				alert("Aprobo " + "muy bien");
			}
			else
			{
				alert("Aprobo");
			}
			break;
		default:
				alert("la nota no es valida");




	}
}
