window.onload=function(){
	var dom=document.getElementById('clock');
	var ctx=dom.getContext('2d');
	var width=ctx.canvas.width;
	var height=ctx.canvas.height;
	var r = width/2;
	console.log(r);
	function drawBackground(){
		ctx.translate(r,r);
		ctx.beginPath();
		ctx.lineWidth=10;
		ctx.arc(0,0,r-5,0,2*Math.PI,false);
		ctx.stroke();
		
		var hourNumbers=[3,4,5,6,7,8,9,10,11,12,1,2];
		ctx.font="18px Arial";
		ctx.textAlign="center";
		ctx.textBaseline="middle";

		hourNumbers.forEach(function(number,i){
			var rad = 2 * Math.PI / 12 * i;
			var x=Math.cos(rad) * (r-30);
			var y=Math.sin(rad) * (r-30);
			ctx.fillText(number,x,y);
		});

		for(var i=0;i<60;i++){
			var rad=2*Math.PI/60*i;
			var x=Math.cos(rad)*(r-18);
			var y=Math.sin(rad)*(r-18);
			ctx.beginPath();
			if(i%5===0){
				ctx.fillStyle="#000";
				ctx.arc(x,y,2,0,2*Math.PI,false);
			}else{
				ctx.fillStyle="#ccc";
				ctx.arc(x,y,2,0,2*Math.PI,false);
			}
			
			ctx.fill();

		}
	}
	drawBackground();


};
