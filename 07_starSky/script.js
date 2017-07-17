window.onload=function(){
	var can = document.getElementById("canvas");
	var ctx = can.getContext('2d');

	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;
	var num = 200;
	var data=[];


	for(var i=0;i<num;i++){
		data[i] = { x:Math.random()*w,y:Math.random()*h,r:Math.random()*8+3};
		Circle(data[i].x,data[i].y,data[i].r);
	}

	!function draw(){
		ctx.clearRect(0,0,w,h);
		for (var i=0;i<num;i++ )		//使星星闪烁
		{
			data[i].r += Math.random()*2-1;
			data[i].r = Math.max(0,data[i].r);
			data[i].r = Math.min(12,data[i].r);
			Circle(data[i].x,data[i].y,data[i].r);
		};
		window.requestAnimationFrame(draw);
	}();



	function Circle(x,y,r){
		ctx.save();
		var rad = ctx.createRadialGradient(x,y,0,x,y,r);
			rad.addColorStop(0,'rgba(255,255,255,0.8)');
			rad.addColorStop(0.1,'rgba(255,255,255,0.7)');
			rad.addColorStop(0.2,'rgba(255,255,255,0.08)');
			rad.addColorStop(1,'rgba(255,255,255,0)');

		ctx.fillStyle = rad;
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
};
