var b;
function load(){
	b=document.getElementById("cuerpo");
}

function test(){

	//ELIMINAR UN NODO DETERMINADO
	/*
	var nodo = document.getElementById("e2");
	b.removeChild(nodo);
	*/

	//ELIMINAR TODOS LOS NODOS DEL TAG "P"

	var pe = document.getElementsByTagName("p");
	b.removeChild(pe.item(0));

}