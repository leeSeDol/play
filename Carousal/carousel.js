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
		this.setPosterPos();
	};
	Carousel.prototype={
		//旋转
		carouseRotate:function(dir){
			var _this_=this;
			var zIndexArr=[];
			if(dir=="left"){
				this.posterItems.each(function(){
					var self=$(this);
					var $prev=self.prev().get(0) ? self.prev():_this_.posterLastItem;
					var width=$prev.width(),
						height=$prev.height(),
						opacity=$prev.css("opacity"),
						zIndex=$prev.css("zIndex"),
						left=$prev.css("left"),
						top=$prev.css("top");
					zIndexArr.push(zIndex);
					self.animate({
						width:width,
						height:height,
						opacity:opacity,
						left:left,
						top:top
					});
				});
				this.posterItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});
			}else if(dir=="right"){

			}
		},
		//设置剩余的帧的位置关系
		setPosterPos:function(){
			var self = this;
			var sliceItems = this.posterItems.slice(1);
			var sliceSize = Math.floor(sliceItems.size()/2);
			var rightSlice=sliceItems.slice(0,sliceSize);
			var leftSlice=sliceItems.slice(sliceSize);
			var level=Math.floor(sliceItems.size()/2);
			//设置右边帧的位置关系和宽度高度
			var rw=this.setting.posterWidth;
			var rh=this.setting.posterHeight;
			var gap=((this.setting.width-this.setting.posterWidth)/2)/level;
			var firstLeft=(this.setting.width-this.setting.posterWidth)/2;
			var firstOffsetLeft=firstLeft+rw;
			rightSlice.each(function(i){
				level--;
				rw=rw*self.setting.scale;
				rh=rh*self.setting.scale;
				var j=i;
				$(this).css({
					zIndex:level,
					opacity:1/(++j),
					width:rw,
					height:rh,
					left:firstOffsetLeft+(++i)*gap-rw,
					top:self.setVerticalAlign(rh)
				});
			});
			var lw=rightSlice.last().width();
			var lh=rightSlice.last().height();
			var oloop=Math.floor(this.posterItems.size()/2);
			leftSlice.each(function(i){
				$(this).css({
					width:lw,
					height:lh,
					opacity:1/oloop,
					zIndex:i,
					left:(gap)*i++,
					top:self.setVerticalAlign(lh)
				});
				lw=lw/self.setting.scale;
				lh=lh/self.setting.scale;
				oloop--;
			});
		},
		//设置垂直排列对其
		setVerticalAlign:function(height){
			var verticalType=this.setting.verticalAlign;
			var top=0;
			if(verticalType=="top"){
				top=0;
			}else if(verticalType=="middle"){
				top=(this.setting.height-height)/2;
			}else if(verticalType=="bottom"){
				top=(this.setting.height-height);
			}
			return top;
		},
		
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
			this.posterFirstItem.css({
				width:this.setting.posterWidth,
				height:this.setting.posterHeight,
				left:w,
				zIndex:(this.posterItems.size())
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
