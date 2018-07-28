function mostrar()
{

	var planeta;

	planeta = prompt("Ingrese un planeta del sistema solar: ");


	switch(planeta)

	{
		case "tierra":
			alert("aca vivimos");
			break;
		case "mercurio":
		case "venus":
		case "tierra":
		case "marte":
			alert("Aca hace mas calor");
			break;
		case "jupiter":
		case "urano":
		case "saturno":
		case "neptuno":
			alert("Aca hace mas frio");
			break;

		default :
			alert("No es un planeta valido");








	}

		

		

	
			

	


	
}
