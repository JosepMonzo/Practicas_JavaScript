function test(){

var ar = new Array();
ar[0] = "El primer espacio";
ar[1] = 2;
ar[2] = 33;
ar[3] = "cuatro";

alert(ar[0]); //Según qué posición, saldrá el valor correspondiente

// Otra manera es hacerlo directamente

var arr = new Array("El primer espacio",2,33,"cuatro");
alert(arr[1]);
}