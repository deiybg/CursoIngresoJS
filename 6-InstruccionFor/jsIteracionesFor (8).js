function mostrar()
{

	
	var numero;
	var divisores;
	var numeroAnterior;


	divisores=0;
	numero = prompt("Ingrese un numero; ");
	numero = parseInt(numero);

	for (numeroAnterior=numero-1 ;numeroAnterior>1;numeroAnterior--) 
	{
		if (numero%numeroAnterior==0) 
		{
			divisores++;
		}
	}
		if (divisores==0) 
		{
			console.log("Es primo");
		}else
		{
			console.log("No es numero primo");
		}

		console.log(divisores);
}//FIN DE LA FUNCIÓN