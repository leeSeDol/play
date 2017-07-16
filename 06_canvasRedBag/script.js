window.onload=function(){
	var canvas = document.getElementById("cav");
	var context = canvas.getContext("2d");
	var randomX = Math.floor(Math.random()*440+30);
	var randomY = Math.floor(Math.random()*440+30);

	context.globalAlpha = 0.99;
	context.fillStyle = '#333';
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();
	context.save();

	context.beginPath();
	context.arc(randomX,randomY,30,0,Math.PI*2,false);
	context.clip();
	context.clearRect(0,0,canvas.width,canvas.height);

	context.restore();
	var num = 30;
	var timer = null;

	document.body.onclick=function(){
		function circle(){
			num+=5;
			context.save();
			context.beginPath();
			context.arc(randomX,randomY,num,0,Math.PI*2,false);
			context.clip();
			context.clearRect(0,0,canvas.width,canvas.height);
			context.restore();
			console.log(num);
			if(num>=700){
				clearInterval(timer);
			}
		}
		timer = setInterval(circle,10);
	};
};

