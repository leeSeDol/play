window.onload=function(){
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");

	/*花部的宽高*/
	var w=canvas.width;
	var h=canvas.height;

	/*起始点距边上的位置*/
	var padding=20;

	ctx.moveTo(padding,padding);
	ctx.lineTo(padding,h-padding);
	ctx.lineTo(w-padding,h-padding);
	ctx.stroke();

	/*箭头的宽高*/
	var arrowW=16,
		arrowH=16;
	/*竖方向箭头*/
	ctx.beginPath();
	ctx.moveTo(padding,padding-arrowH/2);
	ctx.lineTo(padding-arrowW/2,padding+arrowH/2);
	ctx.lineTo(padding,padding);
	ctx.lineTo(padding+arrowW/2,padding+arrowH/2);
	/*横方向箭头*/
	ctx.moveTo(w-padding+arrowW/2,h-padding);
	ctx.lineTo(w-padding-arrowW/2,h-padding-arrowH/2);
	ctx.lineTo(w-padding,h-padding);
	ctx.lineTo(w-padding-arrowW/2,h-padding+arrowH/2);
	ctx.fill();

	/*封装画小方块的函数*/
	function drawPoint(x,y,r,color){
		r=r||8;
		color = color || '#000';
		ctx.beginPath();
		ctx.moveTo(x-r,y-r);
		ctx.lineTo(x+r,y-r);
		ctx.lineTo(x+r,y+r);
		ctx.lineTo(x-r,y+r);
		ctx.fillStyle=color;
		ctx.fill();
	}

	//drawPoint(80,40);
	var points=[ [20,80],[40,1200],[80,80],[200,300],[400,150] ];

	var x0=padding,
		y0=h-padding;

	/*按从小到大排列*/
	points.sort(function(a,b){
		return a[0]-b[0];
	});

	var xLength = w-2*padding-arrowW ;
	var yLength = h-2*padding-arrowH ;

	console.log(xLength,yLength);
	/*求出y坐标的最大值*/
	yMax = Math.max.apply(null,points.map(function(ele){
		return ele[1];
	}));
	/*求出x坐标的最大值*/
	xMax = points[points.length-1][0];
	
	/*得到每一个小方块的位置*/
	
};
