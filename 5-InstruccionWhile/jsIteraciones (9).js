function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo;
	var minimo;



	while(respuesta!='no')
	{
			contador++;
			numero= prompt("Ingrese un numero: " + contador);
			numero = parseInt(numero);

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if (numero>maximo) 
			{
				maximo=numero;	
			}
			if (numero<minimo)
			 {
			 	minimo=numero;
			 }


		respuesta = prompt("Quiere ingresar un numero numero: ");	 
		}	

	}

	document.getElementById('maximo').value= maximo;
	document.getElementById('minimo').value= minimo;


}//FIN DE LA FUNCIÓN