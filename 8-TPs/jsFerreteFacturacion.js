/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno = document.getElementById('PrecioUno').value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById('PrecioDos').value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById('PrecioTres').value;
	precioTres = parseInt(precioTres);

	suma = precioUno+precioDos+precioTres;

	alert("El resultado es " + suma);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = document.getElementById('PrecioUno').value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById('PrecioDos').value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById('PrecioTres').value;
	precioTres = parseInt(precioTres);

	promedio = (precioUno+precioDos+precioTres)/3;

	alert("El resultado es " + promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var iva;
	var resultado;

	precioUno = document.getElementById('PrecioUno').value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById('PrecioDos').value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById('PrecioTres').value;
	precioTres = parseInt(precioTres);

	suma = precioUno+precioDos+precioTres;
	iva = (precioUno+precioDos+precioTres)*0.21;
	resultado = suma + iva;

	alert("El resultado es " + resultado);
}