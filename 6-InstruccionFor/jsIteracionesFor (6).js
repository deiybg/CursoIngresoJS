function mostrar()
{

	var numero;
	var contador;
	var numerosRecorridos;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);

	for (numero =1 ;numero>1;numero++) 

	{
		
		if (numero%2==1) 
		{
			console.log("El numero ingresado es par");
			numerosRecorridos+=numero;
		}
		
		
			console.log("La cantidad de numeros pares es: " + numerosRecorridos);
	}


}//FIN DE LA FUNCIÓN