function test(){
// Englobar el código dentro de un try sirve para en el momento que haya un error, podamos capturarlo con Catch
	try{
		//Capturamos dos numeros desde la pantalla. Con Number le decimos que deben ser números
		var a = Number(prompt("Introducir un numero"));
		var b = Number(prompt("Introducir otro numero"));
		// Con isNaN le estamos diciendo que deben ser número válidos
		if(isNaN(a) || isNaN(b)){
			// Throw le dará el valor a la variable que tengamos en catch
			throw "Has colocado un numero inválido";		
		}
		alert("El resultado es "+(a+b));
		// Creamos la variable error dentro de los parámetros de catch. 
	}catch(error){
		alert("Error: "+error);
	}
}