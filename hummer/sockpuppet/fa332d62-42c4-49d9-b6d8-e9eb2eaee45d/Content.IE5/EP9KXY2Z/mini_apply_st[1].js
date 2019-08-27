
(function(){
	var redirected= false;
	function redirect(){
		if(!redirected){
			redirected= true;
			callback({"code":200,"data":{"st":"1QomUI18CxTccMHPj2jQcaA"}});
		}
	}

	
	
	var imgCounter = 0;
	if(0==imgCounter){
		redirect();
		return;
	}

	setTimeout(redirect,500);

	function loadImg(src) {
	function countDown() {
		imgCounter--;
    	if (0 == imgCounter) {
			redirect();
    	}
	}
	
	var img = document.createElement("img");
	img.onload = countDown;
	img.onerror = countDown;
	img.onabort = countDown;
	img.src = src;
}
	})();
