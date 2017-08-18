$(function(){
	//初始化
	$(".wrapper ul li.cur").animate({
		"width":"246px"
	});
	$(".wrapper ul li.cur .info").animate({
		"height":"60px"
	});
	$(".wrapper ul li.cur .info .p1").animate({
		"left":"-100%"
	});
	$(".wrapper ul li.cur .info .p2").animate({
		"right":"165px",
	},500);

	$(".wrapper ul li").hover(function(){
		var _index = $(this).index();

		$(this).addClass('cur').stop().animate({"width":"246px"})
		.siblings().stop().animate({"width":"108px"}).removeClass("cur");

		$(this).find('.info').stop().animate({"height":"60px"})
		.parent().parent().siblings().find('.info').stop().animate({"height":"306px"});

		/*$(this).find('.info .p1').stop().animate({"left":"-200%"})
		.siblings('.p2').stop().animate({"left":"5px"})
		.parent().parent().parent().siblings().find('.info .p1').stop().animate({left:'10px'},'slow').siblings('.p2').stop().animate({
	       	left:"300px"
	    },'slow')*/
	
	    $(this).find('.info .p1').stop().animate({"left":"-200%"})
	    .siblings('.p2').stop().animate({"right":"165px"})
	    .parent().parent().parent().siblings().find('.info .p1').stop().animate({"left":"10px"})
	    .siblings('.p2').stop().animate({"right":"-200%"})
	});
});
