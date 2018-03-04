
var cont;
var data;

function onLoad(){

	cont = document.getElementById("cont");
	data = new Array();
}

function test(){

	var request = new requestAjax();
	request.onreadystatechange = function(){

		if(request.readyState == 4 && request.status == 200){

			if(request.responseXML != null){

				data[0] = request.responseXML.getElementsByTagName("nombre").item(0);
				data[1] = request.responseXML.getElementsByTagName("edad").item(0);
				data[2] = request.responseXML.getElementsByTagName("nacionalidad").item(0);

				cont.innerHTML+="Nombre: "+data[0].firstChild.nodeValue+"<br/>"
				+"Edad: "+data[1].firstChild.nodeValue+"<br/>"
				+"Nacionalidad: "+data[2].firstChild.nodeValue+"<br/>";
			}
		}
	}
	request.open("GET","http://localhost/Practicas%20JS/data.xml",true);
	request.send();
}

function requestAjax()
{
	try
	{
		var request = new XMLHttpRequest();
	}
	catch(error1)
	{
		try //Ie 6 o 7
		{
			var request = ActiveXObject("Msxm12.XMLHTTP");
		}
		catch(error2)
		{

			try //IE 5
			{
				var request = ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(error3)
			{
				request = false;
			}
		}
	}

	return request;
}