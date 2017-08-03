$(document).ready(function(){
	/*1st example*/
	$("#menu1 li a").wrapInner("<span class='out'></span>").append("<span class='bg'></span>");
	$("#menu1 li a").each(function(){
		var text = $(this).text();
		$("<span class='over'>"+text+"</span>").appendTo(this);
	});

	$("#menu1 li a").hover(function(){
		$(".out",this).stop().animate({
			"top":"40px"
		},250);
		$(".over",this).stop().animate({
			"top":"0px"
		},250);

		$(".bg",this).stop().animate({
			"top":"0px"
		},150);
	},function(){
		$(".out",this).stop().animate({
			"top":"0px"
		},250);
		$(".over",this).stop().animate({
			"top":"-40px"
		},250);

		$(".bg",this).stop().animate({
			"top":"-40px"
		},150);
	});


	/*2st example*/
	$("#menu2 li a").wrapInner("<span class='out'></span>");
	$("#menu2 li a").each(function(){
		$(this).append("<span class='over'>"+ $(this).text() +"</span>");
	});
	
	$("#menu2 li a").hover(function(){
		$(".out",this).stop().animate({
			"top":"40px"
		},250);
		$(".over",this).stop().animate({
			"top":"0px"
		},150);
	},function(){
		$(".out",this).stop().animate({
			"top":"0px"
		},250);
		$(".over",this).stop().animate({
			"top":"-40px"
		},150);
	});
});
