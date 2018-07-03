/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	 nombre = prompt("ingrese su nombre");
	 document.getElementById('elNombre').value = nombre;
	 /*si nombre va primero que en el document se utiliza para guardar y si se utiliza despues se utiliza para mostrar

	 */
}

