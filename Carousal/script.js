;(function(){
	var Carousel=function(poster){
		var self=this;
		this.poster=poster;
		this.posterItemMain=$(".poster-list");
		this.posterItems=$(".poster-list li.poster-item");
		this.nextBtn=$(".poster-next-btn");
		this.prevBtn=$(".poster-prev-btn");
		this.setting={
			"width":800,
			"height":270,
			"posterWidth":560,
			"posterHeight":270,
			"scale":0.8,
			"speed":500,
			"verticalAlign":"middle"
		};
		$.extend(this.setting,this.getSetting());
		this.setSettingValue();
	};
	Carousel.prototype={
		
		
		//设置配置参数值去设置基本的宽度高度
		setSettingValue:function(){
			this.poster.css({
				width:this.setting.width,
				height:this.setting.height,
				zIndex:((this.posterItems.size())/2)
			});
			this.posterItemMain.css({
				width:this.setting.width,
				height:this.setting.height,
				zIndex:((this.posterItems.size())/2)
			});
			//计算上下切换按钮的宽度
			var w=(this.setting.width-this.setting.posterWidth)/2;
			console.log(w);
			this.nextBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size())
			});
			this.prevBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size())
			});
		},
		getSetting:function(){
			var setting=this.poster.attr("data-setting");
			if(setting && setting!=""){
				return $.parseJSON(setting);
			}else{
				return {};
			}

		}
	};
	Carousel.init=function(posters){
		var _this_=this;
		posters.each(function(){
			new _this_($(this));
			console.log("a");
		});
	};
	window["Carousel"]=Carousel;
})();
