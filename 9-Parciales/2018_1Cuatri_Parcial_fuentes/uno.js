
function mostrar()
{
	var ancho;
	var largo;
	var perimetro ;

	ancho = prompt("Ingrese el ancho de un ractangulo")
	ancho = parseInt(ancho);
	largo = prompt("Ingrese el largo de un ractangulo")
	largo = parseInt(largo);

	perimetro = ancho * largo;

	alert("el perimetro del rectangulo es " + perimetro);
}
