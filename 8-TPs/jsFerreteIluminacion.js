/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marca;
 	var precioLamparas;
 	var precioDescuento;

 	cantidadLamparas = document.getElementById('Cantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	marca = document.getElementById('Marca').value;
	precioLamparas = cantidadLamparas *35;
 	

 	switch(cantidadLamparas)
 	{

 		case 1:
 		case 2:
 			precioDescuento = precioLamparas *1;
 			break;

 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					precioDescuento = precioLamparas*0.85;
 					break;
 				case "FelipeLamparas":
 					precioDescuento = precioLamparas*0.90;
 					break;
 				default:
 					precioDescuento = precioLamparas*0.95;
 			
 			}

 		case 4:
 			switch(marca)	
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					precioDescuento = precioLamparas*0.75;
 					break;
 				default:
 					precioDescuento= precioLamparas*0.80;		
 			}

 		case 5:	
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					precioDescuento = precioLamparas*0.60;
 					break;
 				default:
 					precioDescuento = precioLamparas*0.70;	
 			}
 		case 6:
 				precioDescuento= precioLamparas *0.50;
 				break;
 				default:		


 		
 	}
 	precioLamparas = cantidadLamparas *35;
 	document.getElementById('precioDescuento').value = precioDescuento;
}
