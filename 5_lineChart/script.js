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
	ctx.lineTo();
	ctx.lineTo();
	ctx.lineTo();
	ctx.fill();
};
