function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;


	numeroUno = prompt("Ingrese 1er numero: ");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese 2do numero: ");
	numeroDos = parseInt(numeroDos);

	suma =numeroDos + numeroUno;
	resta = numeroUno - numeroDos;

	if (numeroUno==numeroDos) 
		{
			alert("Los numeros ingresados son iguales");

		} 
		else 
		{
			if (numeroUno>numeroDos) 
				{
			
					alert(resta);
				} 
				else 
				{
				
					if (numeroUno<numeroDos && suma >10) 
					{
						alert("la suma es :" + suma + "y supero los 10");
					}	

					else
					{
						alert(suma);
					}				
					
				}	
		}



}

