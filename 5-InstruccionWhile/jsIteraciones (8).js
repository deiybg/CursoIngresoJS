function mostrar()
{

	var contador=0;
	var acumulador =0;
	var acumuladorNegativo = 1;
	var numero;

	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero = prompt("Ingrese un numero: ")
		numero = parseInt(numero);
		contador++;
		if (numero>0)
		 {
		 	acumulador+=numero;
		 }
		  else 
		  {
		  	if (numero<0) 
		  		{
		  			acumuladorNegativo*=numero;
		  		}
		  }
		respuesta= prompt("Desea continuar: ");


	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('producto').value = acumuladorNegativo;



}//FIN DE LA FUNCIÓN