window.onload=function(){
	var inners = document.getElementsByClassName("inner");	
	var width = window.innerWidth;
	var height = window.innerHeight;
	for(var i=0;i<inners.length;i++){
		inners[i].style.width = width+'px';
		inners[i].style.height = height+'px';
	}
	window.onresize = function(){
		var inners = document.getElementsByClassName("inner");
		
		var width = window.innerWidth;
		var height = window.innerHeight;

		for(var i=0;i<inners.length;i++){
			inners[i].style.width = width+'px';
			inners[i].style.height = height+'px';
		}
	};

	document.body.onmousewheel = function(event){
		event = event||window.event;
		console.log(event.wheelDelta);
		if(event.wheelDelta == -120){
			//页面往下滚
			event.preventDefault();
			document.body.scrollTop+=height;

		}else if(event.wheelDelta == 120){
			//页面向上滚
			event.preventDefault();
			document.body.scrollTop-=height;

		}
	};


	
	function scrollChange(){

	}

};
