/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	var cemento;
	var cal;

	largo = document.getElementById('Largo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('Ancho').value;
	ancho = parseInt(ancho);

	resultado = (largo*ancho)*3;

	alert("La cantidad de alambre es " + resultado);


}
function Circulo () 
{
	var radio;
	var area;
	var resultado;

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);

	area = (3.14 * (radio*radio));

	resultado = area * 3; 

	alert("La cantidad de alambre es " + resultado);
}
function Materiales () 
{
	var largo;
	var ancho;
	var resultado;
	var cemento;
	var cal;
	var materiales;
	var area;
	var cementoArea;
	var calArea;

	largo = document.getElementById('Largo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('Ancho').value;
	ancho = parseInt(ancho);

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);

	resultado = largo * ancho;
	area = (3.14 * (radio*radio));

	cemento = resultado *2;
	cal = resultado *3;

	cementoArea = area * 2 ;
	calArea = area * 3;



	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	alert("Se necesitan " + cementoArea + " bolsas de cemento y " + calArea + " bolsas de cal");


}