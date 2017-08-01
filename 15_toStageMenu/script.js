(function(){
	$(".Menu ul li").hover(function(){
		//鼠标划上去
		$(this).addClass("hover");
		var _top = $(this).position().top;
		var _height = $(this).find(".nav_more").height()/2;
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; 
		console.log(_top);
		console.log(_height);
		if( _top+_height*2 > clientHeight-80){
			$(this).find(".nav_more").css("top","-"+_height+"px");
		}
	},function(){
		//鼠标移开
		$(this).removeClass("hover");
	});
})();
