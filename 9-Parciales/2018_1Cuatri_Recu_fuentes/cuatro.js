function mostrar()
{
	var numeroUno;
	var numeroDos;
	var division;
	var suma;

	numeroUno = prompt("Ingrese numero uno: ");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese numero dos: ");
	numeroDos = parseInt(numeroDos);

	division=numeroUno/numeroDos;
	suma=numeroUno+numeroDos;

	if (numeroUno==numeroDos) 
		{
			alert("" + "numeroDos");
		} 
	else 
		{
		if(numeroUno>numeroDos)
		{
			
			alert(division);
		}
		else
		{

			if (numeroUno<numeroDos && suma<50) 
			{
			
			alert("la suma es " + suma + "y es menor a 50");
			}
			else
			{
			alert(suma);
			}
		}	

	}
}
