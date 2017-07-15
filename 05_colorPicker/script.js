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
	var left = e.position().left;
	var top = e.position().top;
	var deltaC=0;
	for(var x=0;x<this.width;x++){
		deltaC =(x-0) * 255 * 6/(this.width);
		var colorPx = $("<div></div>");
		ele.append(colorPx);

		colorPx.click(function(){
			var bgColor=$(this).css({"background-color"});
			$(self.result).css({"background-color":bgColor});
			$(self.textObject).text(bgColor);
		});

		colorPx.css({
			"position":"absolute",
			"left":x+left,
			"top":0+top,
			"height":this.height,
		});
	}

};

(function(){
	var colorBar = new colorBar( '#color_panel' , 255*3 , 165 ,'#color_result','#colorText');
});
