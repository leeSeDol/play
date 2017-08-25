$(document).ready(function(){
	$("#menu1 ul li a").wrapInner("<span class='out'></span>").append("<span class='bg'></span>");
	$("#menu1 ul li a").each(function(){
		var $text = $(this).text();
		$("<span class='over'>"+ $text +"</span>").appendTo($(this));
	});

	$("#menu1 ul li a").hover(function(){
		$(".out",this).stop().animate({
			"top":"40px"
		},250);
		$(".bg",this).stop().animate({
			"top":"0px"
		},150);
		$(".over",this).stop().animate({
			"top":"0px"
		},250);
	},function(){
		$(".out",this).stop().animate({
			"top":"0px"
		},250);
		$(".bg",this).stop().animate({
			"top":"-40px"
		},150);
		$(".over",this).stop().animate({
			"top":"-40px"
		},250);
	});



	$("#menu2 ul li a").wrapInner("<span class='out'></span>");
	$("#menu2 ul li a").each(function(){
		var $text = $(this).text();
		$("<span class='over'>"+ $text +"</span>").appendTo($(this));
	});

	$("#menu2 ul li a").hover(function(){
		$(".out",this).stop().animate({
			"top":"40px"
		},250);
		$(".over",this).stop().animate({
			"top":"0px"
		},250);
	},function(){
		$(".out",this).stop().animate({
			"top":"0px"
		},250);
		$(".over",this).stop().animate({
			"top":"-40px"
		},250);
	});
});
