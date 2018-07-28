function mostrar()
{

	var precio;
	var descuento;
	var precioDescuento;
	var precioFinal;

	precio = prompt("Ingrese precio: ");
	precio = parseInt(precio);
	descuento = prompt("Ingrese el % de descuento: ");
	descuento = parseInt(descuento);

	precioDescuento = (precio*descuento)/100;
	precioFinal = precio - descuento;


	document.getElementById('elPrecioFinal').value = precioFinal;
}
