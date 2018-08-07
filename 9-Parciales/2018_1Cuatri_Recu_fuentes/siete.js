function mostrar()
{
	var notas;
	var edad;
	var sexo;
	var contador =0;
	var promedio;
	var contadorNotas= 0;
	var maximo;
	var minimo;
	var sexoMenor;
	var contadorHombresMayores =0;
	var edadMenor;
	var maximoEdad;
	var minimoEdad;
	



	while(contador <4)
	{
		contador++;

		notas = prompt("Ingrese una nota: ");
		notas = parseInt(notas);
		while(isNaN(notas) || notas<0 || notas>10)
		{
			notas = prompt("Ingrese una nota: ");
			notas = parseInt(notas);
		}

		edad = prompt("Ingrese una edad: ");
		edad = parseInt(edad);
		while(isNaN(edad) || edad<0 || edad>100)
		{
			edad = prompt("Ingrese una edad: ");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese un sexo: ");

		while( sexo!="m" && sexo!="f")
		{
			sexo = prompt("Ingrese un sexo: ");
			
		}

		contadorNotas+=notas;

		if (contador==1) 
		{
			maximo=notas;
			minimo=notas;
			sexoMenor=sexo;
		}
		else
		{
			if (notas>maximo) 
			{
				maximo=notas;
			}
			if (notas<minimo) 
			{
				minimo=notas;
				sexoMenor=sexo;
			}		
		}

		if (sexo=="m" && edad>18 && notas>=6)
		{
			contadorHombresMayores++;
		}

		if (contador==1) 
		{
			maximoEdad=edad;
			minimoEdad=edad;
			
		}
		else
		{
			if (edad>maximoEdad) 
			{
				maximoEdad=edad;
			}
			if (edad<minimoEdad) 
			{
				minimoEdad=edad;
				
				
			}		
		}


	}

	promedio=contadorNotas/contador;
	document.write("El promedio es: " + promedio);
	document.write("La nota minima es : " + minimo + " y el sexo es : " + sexoMenor );
	document.write("La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6 es: " + contadorHombresMayores );
	document.write("El sexo del mas joven es  : " + minimoEdad + " y su nota es : " + sexoMenor );





}
