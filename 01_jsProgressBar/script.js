window.onload=function(){
	let box = document.getElementById('box');
    let left = document.getElementById('left');
    let bg = document.getElementById('bg');
    let bar = document.getElementById('bar');
    let right = document.getElementById('right');

    right.innerHTML=parseInt(bg.offsetWidth/left.offsetWidth * 100)+'%';

    bar.onmousedown=function(event){
    	let myEvent = event || window.event;
    	let x = myEvent.clientX - bar.offsetLeft;

    	document.onmousemove=function(event){
    		
    		let myEvent = event || window.event;
    		let Left = myEvent.clientX - x;
    		if(Left<0){
    			Left=0;
    		}else if(Left > left.offsetWidth-30){
    			Left = left.offsetWidth-30;
    		}
    		bg.style.width = Left+'px';
    		bar.style.left = Left+'px';
    		right.innerHTML = parseInt(Left/(left.offsetWidth-bar.offsetWidth)*100) + '%';
    	};
   
	    document.onmouseup=function(){
			document.onmousemove = null;
			document.onmouseup = null;
	    };
    };
};
