(function($){
	//初始化
	var pro_w = $(".watermarkOpacity_progress").width();
	var pro_num = $(".proNum input").val();
	var new_pro = pro_w*pro_num/100;
	$(".watermarkOpacity_progress p").css({"width":new_pro +'px'});

	$(".proNum input").keyup(function(){
		var keyNum = $(this).val();
		var keyPro = keyNum*pro_w/100;
		$(".watermarkOpacity_progress p").css({"width":keyPro+'px'});
		$(".watermarkOpacity_progress p i").css({"left":keyPro+'px'});
	});

	var dragging = false;
	var iLeft,oLeft;

	$(".watermarkOpacity_progress p i").mousedown(function(e){
		iLeft = e.clientX - this.offsetLeft -6;
		dragging = true;
		return false;
	});

	$(".watermarkOpacity_div").mousemove(function(e){
		if(dragging){
			var e = e || window.event;
			oLeft  = e.clientX - iLeft;
			var per = oLeft/pro_w*100;
			if(oLeft<=0){
				oLeft = 0;
			}else if(oLeft>=245){
				oLeft=245;
			}
			$(".watermarkOpacity_progress p i").css({
				"left":oLeft+'px'
			});
			console.log(oLeft);
			$(".watermarkOpacity_progress p").css({
				"width":oLeft+'px'
			});
			if( oLeft<=0 ){
				$(".proNum input").val("0");
			}else if( oLeft>=pro_w ){
				$(".proNum input").val("100");
			}else{
				per = Math.round(per);
				$(".proNum input").val(per);
			}
		}
	});

	$("body").mouseup(function(){
		dragging = false;
	});
})(jQuery);
