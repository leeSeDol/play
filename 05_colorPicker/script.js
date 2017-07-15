var self;
function ColorBar(ele , width , height , result , textObject){
	this.ele=ele;
	this.width=width;
	this.height=height;
	this.result=result;
	this.textObject=textObject;
	self=this;
};
ColorBar.prototype.drawPanel=function(){
	var ele=$(this.ele);
	var left = ele.position().left;
	var top = ele.position().top;
	var deltaC=0;
	for(var x=0;x<this.width;x++){
		deltaC =(x-0) * 255 * 6/(this.width);
		var colorPx = $("<div></div>");
		ele.append(colorPx);

		colorPx.click(function(){
			var bgColor=$(this).css("background-color");
			$(self.result).css({"background-color":bgColor});
			$(self.textObject).text(bgColor);
		});

		colorPx.css({
			"position":"absolute",
			"left":x+left,
			"top":0+top,
			"width":1,
			"height":this.height,
		});
		if (deltaC>=0 && deltaC<=255) {
			r = 255;
			g = 0;
			b = 0;
			colorPx.css(
				"background-color","rgb("+r+","+(g+deltaC)+","+b+")"
			);
		}

		if (deltaC>255 && deltaC<=255*2) {
			r = 255;
			g = 255;
			b = 0;
			colorPx.css(
				"background-color","rgb("+(r-deltaC+255)+","+g+","+b+")"
			);
		}
		if (deltaC>255*2 && deltaC<=255*3) {
			r = 0;
			g = 255;
			b = 0;
			colorPx.css(
				"background-color","rgb("+r+","+g+","+(b+deltaC-255*2)+")"
			);
		}
		if (deltaC>255*3 && deltaC<=255*4) {
			r = 0;
			g = 255;
			b = 255;
			colorPx.css(
				"background-color","rgb("+r+","+(g-deltaC+255*3)+","+b+")"
			);
		}
		if (deltaC>255*4 && deltaC<=255*5) {
			r = 0;
			g = 0;
			b = 255;
			colorPx.css(
				"background-color","rgb("+(r+deltaC-255*4)+","+g+","+b+")"
			);
		}
		if (deltaC>255*5 && deltaC<=255*6) {
			r = 255;
			g = 0;
			b = 255;
			colorPx.css(
				"background-color","rgb("+r+","+g+","+(b-deltaC+255*5)+")"
			);
		}
	}

};

$(function(){
	var colorBar = new ColorBar( '#color_panel' , 255*3 , 165 ,'#color_result','#colorText');
	colorBar.drawPanel();
});
