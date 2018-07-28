
function mostrar()
{
	var ancho;
	var largo;
	var perimetro ;

	ancho = prompt("Ingrese el ancho de un rectangulo")
	ancho = parseInt(ancho);
	largo = prompt("Ingrese el largo de un rectangulo")
	largo = parseInt(largo);

	perimetro = ancho * largo;

	alert("el perimetro del rectangulo es " + perimetro);
}
