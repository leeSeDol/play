(function(){
	var canvas = document.getElementById("bBg");
	var w = canvas.width = document.documentElement.clientWidth||document.body.clientWidth;
	var h = canvas.height = document.documentElement.clientHeight||document.body.clientHeight;
	var ctx = canvas.getContext('2d');
	var num = 200;
	var data = [];
	for(var i=0;i<num;i++){
		data[i] = {x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*8+3};
		drawStar(data[i].x,data[i].y,data[i].r);
	}
	!function draw(){
		ctx.clearRect(0,0,w,h);
		for (var i=0;i<num;i++ )		//使星星闪烁
		{
			data[i].r += Math.random()*2-1;
			data[i].r = Math.max(0,data[i].r);
			data[i].r = Math.min(12,data[i].r);
			drawStar(data[i].x,data[i].y,data[i].r);
		};
		window.requestAnimationFrame(draw);
	}();
	function drawStar(x,y,r){
		ctx.save();
		var g = ctx.createRadialGradient(x,y,0,x,y,r);
		g.addColorStop(0,'rgba(255,255,255,0.8)');
		g.addColorStop(0.1,'rgba(255,255,255,0.6)');
		g.addColorStop(0.2,'rgba(255,255,255,0.01)');
		g.addColorStop(1,'rgba(255,255,255,0)');
		ctx.fillStyle = g;
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI,false);
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
})();


