function mostrar()
{

	var contador=0;
	var numero;
	var acumuladorNegativo = 0;
	var acumuladorPositivo = 0;
	var contadorPositivo =0;
	var contadorNegativo=0;
	var contadorCero =0;
	var respuesta="si";
	var promedioPositivos;
	var promedioNegativos;
	var contadorPares =0;
	var diferenciaPN;

	while(respuesta!="no")
	{	
		contador++;
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		

		if (numero<0) 
		{
			acumuladorNegativo+=numero;
			contadorNegativo++;
			promedioNegativos = acumuladorNegativo/contador;

		}
		else
		{
			if (numero>0) 
			{
				acumuladorPositivo+=numero;
				contadorPositivo++;
				promedioPositivos = acumuladorPositivo/contador;
			}
		else
		{
			if (numero==0) 
			{
				contadorCero++;
			}
		}	

		if (numero%2==0) 
		{
			contadorPares++;
		}

		if (contadorPositivo>contadorNegativo)
		 {
		 	diferenciaPN = contadorPositivo - contadorNegativo;
		 }

			
		}

		respuesta = prompt("Desea continuar: ");
		
	}

	//if(numero %2==0) es para saber si un numero es par, hacerlo fuera del while
		
	

		document.write("Suma de los positivos: " + acumuladorPositivo + "<br>" + "Suma de los negativos: " + acumuladorNegativo
			+ "<br>" + "Cantidad de positivos: " + contadorPositivo + "<br>" + "Cantidad de negativos: " + contadorNegativo
			+ "<br>" + "Promedio de positivos: " + promedioPositivos + "<br>" + "promedio de negativos: " + promedioNegativos
			+ "<br>" + "Contador de ceros: " + contadorCero + "<br>" + "Cantidad de pares: " + contadorPares + "<br>" +
			"Hay " + diferenciaPN + " numero positivos mas que negativos");


}