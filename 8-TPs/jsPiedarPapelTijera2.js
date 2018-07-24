var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var piedra =1;
var papel = 2;
var tijera = 3;
var mensaje;

// cont ++, ++ cont, cont += 1, cont = cont +1

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina = Math.floor(Math.random()* 3) + 1; 


}//FIN DE LA FUNCIÓN
function piedra()
{

	if (eleccionMaquina == "1") 
	{
		ContadorDeEmpates ++; 
		alert("empato");
	} else if (eleccionMaquina == "3") {

		ContadorDeGanadas ++;
		alert("gano");
;
	}
	else	ContadorDePerdidas ++;
		alert("perdio");
;

}//FIN DE LA FUNCIÓN
function papel()
{
if (eleccionMaquina == "1") 
	{
		ContadorDeGanadas ++; 
		alert("gano");
	} else if (eleccionMaquina == "3") {

		ContadorDePerdidas ++;
		alert("perdio");
;
	}
	else	ContadorDeEmpates ++;
		alert("empato");
}//FIN DE LA FUNCIÓN
function tijera()
{if (eleccionMaquina == "1") 
	{
		ContadorDePerdidas ++; 
		alert("perdio");
	} else if (eleccionMaquina == "3") {

		ContadorDeEmpates ++;
		alert("empato");
;
	}
	else	ContadorDeGanadas ++;
		alert("gano");
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	documen.getElementById('ganadas'). value = ContadorDeGanadas;
	documen.getElementById('perdidas'). value = ContadorDePerdidas;
	documen.getElementById('empatadas'). value = ContadorDeEmpates;
}