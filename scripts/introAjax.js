function requestAjax(){
	try{
		var request = new XHLHttpRequest();
	}catch(error1){}

		try //Ie 6 o 7
		{
			var request = ActiveXObject("Msxm12.XHLHTTP");
		}catch(error2){

			try //IE 5
			{
				var request = ActiveXObject("Microsoft.XHLHTTP");
			}catch(error3){
				request = false;
			}
		}
	}
	return request;
}