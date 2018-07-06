function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var iva;
	var elPrecioFinal;

	precio = prompt("ingrese precio ");
	porcentaje = prompt("ingrese porcentaje ");
	porcentaje = parceInt(precio);
	precio = parceInt(precio);

	descuento = precio + porcentaje;
	descuento = parceInt(descuento);

	alert(descuento);




	


}
