$(function(){
	$("#nav").Stick();
});
;(function($ , window , document , undefined ){
	var Stick = function(elem){
		this.$cur = elem;
		this.$curW = this.$cur.width();
		this.$curH = this.$cur.height();
		this.$offsetTop = this.$cur.offset().top;
		this.$offsetLeft = this.$cur.offset().left;
		this.isFixed = false;
	};
	Stick.prototype={
		init:function(){
			var that = this;

			$(window).on("scroll",function(){
				var winScroll = $(this).scrollTop();
				if(that.$offsetTop < winScroll){
					if(!that.isFixed){
						console.log("2")
						that.setFixed();
					}
				}else{
					if(that.isFixed){
						that.unsetFixed();
					}			
				}
			});	
		},
		setFixed:function(){console.log("1");
			var that = this;
			console.log(this.$cur);
			this.$cur.css({
				"width":that.$curW,
				"height":that.$curH,
				"position":"fixed",
				"left":that.$offsetLeft,
				"top":0,
				"z-index":100
			})
			this.isFixed = true;
		},
		unsetFixed:function(){
			this.$cur.removeAttr("style");
			this.isFixed = false;
		},
		constructor:Stick
	};
	$.fn.Stick = function(){
		var stick = new Stick(this);
		return stick.init();
	};
})(jQuery , window , document);
