window.onload=function(){
	var box = document.getElementById('box');
	var left = box.getElementsByClassName('left')[0];
	var bg = left.getElementsByClassName('bg')[0];
	var bar = left.getElementsByClassName('bar')[0];
	var right = box.getElementsByClassName('right')[0];


	right.innerHTML = parseInt(bg.clientWidth/left.clientWidth*100)+'%';
	bar.onmousedown = function(event){
		var myEvent = event||window.event;
		var x = myEvent.clientX - bar.offsetLeft;
		document.onmousemove = function(event){
			myEvent = event||window.event;
			var Left = myEvent.clientX - x;

			Left < 0 ? Left = 0:Left;
			Left > left.offsetWidth - bar.offsetWidth ? Left = left.offsetWidth - bar.offsetWidth : Left;
 			
 			bg.style.width = Left+'px';
			bar.style.left = Left+'px';
			right.innerHTML = parseInt(bg.offsetWidth/(left.offsetWidth-bar.offsetWidth)*100)+'%';

			return false;
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			return false;
		};
	};
};
