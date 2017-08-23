(function(){
	$.fn.stick = function(){
		var $cur = this,
			curW = $cur.width(),
			curH = $cur.height(),
			offsetLeft = $cur.offset().left,
			offsetTop = $cur.offset().top;
		var isFixed = false;

		$(window).on("scroll",function(){
			var winScroll = $(this).scrollTop();
			if(offsetTop<winScroll){
				if(!isFixed){
					setFixed();
				}
			}else{
				if(isFixed){
					unsetFixed();
				}
			}
		});

		function setFixed(){
			$cur.css({
				"position":"fixed",
				"width":curW,
				"top":0,
				"left":offsetLeft,
				"z-index":100,
				"margin":0
			});
			isFixed = true;
		}
		function unsetFixed(){
			$cur.removeAttr("style");
			isFixed = false;
		}
	};
	$(".nav").each(function(){
		$(this).stick();
	});
})();
