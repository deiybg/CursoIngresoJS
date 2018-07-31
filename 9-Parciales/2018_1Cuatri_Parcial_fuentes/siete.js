function mostrar()
{
	var notas;
	var sexo;
	var contador = 0;
	var promedio;

	while(contador<5)

	{

	contador++;	
	notas = prompt("Ingresar una nota: ");
	notas = parseInt(notas);

	while(notas<0 || notas>10)
	{
		alert("ingrese una nota valida entre 0 y 10");
		notas = prompt("Ingresar una nota: ");
		notas = parseInt(notas);
		
	}


	sexo = prompt("Ingresar un sexo: ");

	while(sexo !="f" && sexo !="m")
		{
			alert("Ingrese un sexo valid8 f o m ");
			sexo = prompt("Ingresar un sexo: ");

		}

	promedio = notas / contador;




	}

	alert("el promedio de las notas totales es: " + promedio);
}
