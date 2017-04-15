;(function($){
	var Lightbox = function(){
		var self=this;
		//创建遮罩和弹出框
		this.popupMask=$('<div id="G-lightbox-mask">');
		this.popupWin =$('<div id="G-lightbox-popup">');
		//保存body
		this.bodyNode=$(document.body);
		//this.renderDOM();


		this.groupName=null;
		this.groupData=[];
		//准备开发事件委托，获取组数据
		this.bodyNode.delegate(".js-lightbox,[data-role='lightbox']","click",function(e){//delegate???
			e.stopPropagation();
			var currentGroupName=$(this).attr("data-group");
			if(currentGroupName!=self.groupName){
				self.groupName=currentGroupName;
				//根据当前组名获取同一组数据
				self.getGroup();
			}

		});
	};
	Lightbox.prototype={
		renderDOM:function(){
			var strDom='<div class="lightbox-pic-view">'+
							'<span class="lightbox-btn lightbox-prev-btn "></span>'+
							'<img class="lightbox-image" src="images/2-2.jpg" width="100%" height="100%" alt="">'+
							'<span class="lightbox-btn lightbox-next-btn "></span>'+
						'</div>'+
						'<div class="lightbox-pic-caption">'+
							'<div class="lightbox-caption-area">'+
								'<p class="lightbox-pic-desc"></p>'+
								'<span class="lightbox-of-index">当前索引：0 of 0</span>'+
							'</div>'+
							'<span class="lightbox-close-btn"></span>'+
						'</div>';
			//插入到this.popupWin
			this.popupWin.html(strDom);
			this.bodyNode.append(this.popupMask,this.popupWin);
		},
		setGroup:function(){
			

		}
	};
	window["Lightbox"]=Lightbox;
})(jQuery);
