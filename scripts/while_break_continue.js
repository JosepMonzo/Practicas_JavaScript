function test(){
var a,b;
a = 5;
b = 15;
	while( a < b){

		document.write(a+"<br>");
		a++;
	}


// Ejemplo con do-while
var c,d;
c = 5;
d = 15;
do{
	document.write(c+"<br>");
	c++
}while(c<d)

// Ejemplo con break

var e,f;
e =5;
f = 15;

while(true){

	document.write(e+"<br>");
	e++;
	if(e>=f){
		break;
	}
}

// Ejemplo con continue. No imprimirá el 10 ya que vuelve atrás el ciclo
var g,h;
g =5;
h = 15;

while(true){
	g++;
	if (g == 10){

		continue;
	}
	document.write(g+"<br>");
	
	if(g>=h){
		break;
	}
}

}

