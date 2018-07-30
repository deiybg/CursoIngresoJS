
function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var suma;

	

	while(contador<5)
	{
		
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		contador++;
		

	while(isNaN(numero))	

		{

		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		
		}

		acumulador+=numero;
	}

	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN


	/*while(isnan(num))
	{
		numero = prompt(numero);
		numero = parseInt(numero);
	}
	*/