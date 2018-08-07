function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var iva;
	var precioFinal;
	var precioDescuento;

	precio = prompt("ingrese precio ");
	precio = parseInt(precio);
	porcentaje = prompt("ingrese porcentaje ");
	porcentaje = parseInt(porcentaje);
	

	descuento = (porcentaje*precio)/100;
	precioDescuento= precio - descuento;
	iva = precio * 0.21;
	precioFinal=precioDescuento+iva;


	

	alert("El descuento en dinero es: "+ descuento + ",el precio con el descuento es: " + precioDescuento + " y el iva es : " + iva);
	document.getElementById('elPrecioFinal').value = precioFinal;



	


}
