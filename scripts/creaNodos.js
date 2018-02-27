
var tags;
function load(){
tags=document.getElementsByTagName('p');

}

function test(){
	//creamos un nodo de tipo "p"
	var elemento = document.createElement("p");

	//añadirle un nodo de texto a ese tag p
	var text = document.createTextNode("Elemento "+(tags.length+1));
	elemento.appendChild(text);


	document.getElementById("caja").appendChild(elemento);
	load();
}