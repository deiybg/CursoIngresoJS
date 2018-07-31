/*
jose m 25
maria f 16
jesus m 33
fer f 81
*/

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador =0;
	var contadorMujeres = 0;
	var contadorHombres = 0;
	var contadorMayorEdad =0;
	var contadorMenorEdad=0;
	var maximo;
	var minimo;


	while(contador <4 )


	{
		contador++;

		nombre = prompt("ingrese su nombre: ");

		sexo = prompt("Ingrese su sexo");
		while(sexo !="m"&& sexo!="f")
		{
		sexo = prompt("Ingrese su sexo");
		}
		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(isNaN(edad) || edad<0 || edad >100)
		{
		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		}

		if (sexo =="f") 
		{
		contadorMujeres++;
		}
		else
		{
		contadorHombres++;
		}

		if (edad>18) 
		{
		contadorMayorEdad++;
		} 
		else 
		{
		contadorMenorEdad++;
		}

		if (edad==1)
		 {
		 	maximo =edad;
		 	minimo=edad;
		 }
		 else
		 {
		 	if (edad>maximo) 
		 	{
		 		maximo=edad;
		 	}
		 	if (edad<minimo) 
		 	{
		 		minimo=edad;
		 	}
		 }

	}

	
	

	document.write("Cantidad de mujeres = " + contadorMujeres );
	document.write("Cantidad de hombres = " + contadorHombres );
	document.write("Cantidad de mayores de edad = " + contadorMayorEdad );
	document.write("Cantidad de menores de edad = " + contadorMenorEdad );






























}



/*var notas;
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

	alert("el promedio de las notas totales es: " + promedio);*/