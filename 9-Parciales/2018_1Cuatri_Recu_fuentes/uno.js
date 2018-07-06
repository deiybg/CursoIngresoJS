
function mostrar()
{
var base;
var altura;
var superficie;
var perimetro;

base = prompt("Ingrese la base ");
base = parseInt(base);

altura = prompt("Ingrese la altura ");
altura = parseInt(base);

superficie = base * altura;
perimetro = (base + altura + base);

alert("la superficie es " + superficie + " el perimetro es " + perimetro)

}
