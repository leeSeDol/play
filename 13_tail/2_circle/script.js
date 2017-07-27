window.onload=function(){
	var can = document.getElementById("can");
	var ctx = can.getContext("2d");

	can.width = 600;
	can.height = 600;

	var timer=null;

	var x=100;
	var y=100;

	var circle={
		x:300,
		y:200,
		r:150
	};
	var x0 = circle.x;
	var y0 = circle.y - circle.r; 
	ctx.fillStyle='rgba(0,0,0,0.05)';
	ctx.lineCap = 'round';

	var angle = 0;
	function draw(){
		ctx.fillRect(0,0,600,600);
		/*这段轨迹可以去掉*/
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle='#f80';
		ctx.arc(circle.x,circle.y,circle.r,0,2*Math.PI,false);
		ctx.closePath();
		ctx.stroke();
		/*圆轨迹结束了*/
		angle++;
		x = Math.sin( angle*Math.PI/180 ) * circle.r + x0;
		y = circle.r - Math.cos( angle*Math.PI/180 ) * circle.r + y0;
		ctx.strokeStyle = '#fff';
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.moveTo(x,y);
		ctx.lineTo(x+0.5,y+0.5);
		
		ctx.stroke();
	}
	timer=setInterval(function(){
		draw();
	},16);
};
