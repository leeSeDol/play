(function(){
	$(".Menu ul li").hover(function(){
		//鼠标划上去
		$(this).addClass("hover");

	},function(){
		//鼠标移开
		$(this).removeClass("hover");
	});
})();
