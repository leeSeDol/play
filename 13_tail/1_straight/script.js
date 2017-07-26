window.onload=function(){
	var can = document.getElementById("canvas");
	var ctx = can.getContext("2d");

	can.width = 600;
	can.height = 600;

	//设置线条样式
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.lineCap = 'round';
	//定义初始位置
	var x=100;
	var y=100;

	function draw(){
		ctx.fillRect(0,0,600,600);
		x++;
		y++;
		ctx.strokeStyle = '#fff';
		ctx.lineWidth=10;
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+1,y+1);
		ctx.stroke();
	}
	var testflag = 0;
	var testtimer = setInterval(function(){
		draw();
		testflag++;
		if(testflag == 200){
			clearInterval(testtimer);
		}
	},16);
};
