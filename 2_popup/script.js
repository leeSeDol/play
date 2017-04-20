window.onload=function(){
	function $(id){
		if(id.substr(0,1)=='.'){
			return document.getElementByClassName(id.substr(1));
		}
		return document.getElementById(id);
	}

};
