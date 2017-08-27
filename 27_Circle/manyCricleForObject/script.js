/*面向过程*/
$(function(){
	var num = 10;
	for(var i=0;i<num;i++){
		var oBox= document.createElement("div");
		oBox.className = 'box';
		document.body.appendChild(oBox);
	}

	$(".box").Circle();
});
/*面向对象*/
;(function($ , window , document , undefined ){

var Circle = function(elem){

	this.element = elem;
	this.x = 0;
	this.y = 0;

	for(var i=0;i<10;i++){
		this.element[i].xSpeed = 3+i;
		this.element[i].ySpeed = 1+i;
	}

	this.cWidth = document.documentElement.clientWidth||document.body.clientWidth;
	this.cHeight = document.documentElement.clientHeight||document.body.clientHeight;
	this.winWidth = this.cWidth - this.element[0].clientWidth;
	this.winHeight = this.cHeight - this.element[0].clientHeight;

	for(var i=0;i<10;i++){
		this.element[i].style.background = this.color();
	}

}
Circle.prototype = {
	init:function(){
		var self = this;

		$(window).on("resize",function(){
			self.cWidth = document.documentElement.clientWidth||document.body.clientWidth;
			self.cHeight = document.documentElement.clientHeight||document.body.clientHeight;
			self.winWidth = self.cWidth - self.element.width();
			self.winHeight = self.cHeight - self.element.height();

			console.log(self.winWidth,self.winHeight);
		});
		self.move();
	},
	move:function(){
		var self = this;
		var length = self.element.length;

		for(var i=0;i<length;i++){
			var oBox = self.element[i];
			
			oBox.Left = oBox.offsetLeft;
			oBox.Top = oBox.offsetTop;

			oBox.moveLeft = oBox.Left + oBox.xSpeed;
			oBox.moveTop = oBox.Top + oBox.ySpeed;

			//console.log(oBox.moveLeft,oBox.moveTop);
			if(oBox.moveLeft >= self.winWidth || oBox.moveLeft <= 0){
				oBox.moveLeft = Math.min(oBox.moveLeft,self.winWidth);
				oBox.moveLeft = Math.max(oBox.moveLeft,0);
				oBox.xSpeed = -oBox.xSpeed;
				oBox.style.background = self.color();
			}
			if(oBox.moveTop >= self.winHeight || oBox.moveTop <= 0){
				oBox.moveTop = Math.min(oBox.moveTop,self.winHeight);
				oBox.moveTop = Math.max(oBox.moveTop,0);
				oBox.ySpeed = -oBox.ySpeed;
				oBox.style.background = self.color();
			}
			oBox.style.left = oBox.moveLeft+'px';
			oBox.style.top = oBox.moveTop+'px';
		}
		window.requestAnimationFrame(function(){
			self.move();
		});
	},
	color:function(){

		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);

		return "rgb("+ r +","+ g +","+ b +")";
	}
};

$.fn.Circle = function(){
	var circle = new Circle(this);
	return circle.init();
};

})(jQuery , window , document);
