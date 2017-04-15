;(function($){
	var Lightbox = function(){
		var self=this;
		//创建遮罩和弹出框
		this.popupMask=$('<div id="G-lightbox-mask">');
		this.popupWin =$('<div id="G-lightbox-popup">');
		//保存body
		this.bodyNode=$(document.body);
		//渲染剩余的DOM并插入到body
		this.renderDOM();
		this.picViewArea	=this.popupWin.find("div.lightbox-pic-view");//图片预览区域
		this.popupPic		=this.popupWin.find("img.lightbox-image");//图片
		this.picCaptionArea =this.popupWin.find("div.lightbox-pic-caption");//图片描述区域

		this.nextBtn 		=this.popupWin.find("div.lightbox-next-btn");
		this.prevBtn 		=this.popupWin.find("div.lightbox-prev-btn");
		this.closeBtn 		=this.popupWin.find("span.lightbox-close-btn");

		this.captionText	=this.popupWin.find("p.lightbox-pic-desc");//图片描述
		this.currentIndex	=this.popupWin.find("span.lightbox-of-index")//图片当前索引

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
			self.initPopup($(this));
		});
	};
	Lightbox.prototype={
		showMaskAndPopup:function(sourceSrc,currentId){
			console.log(sourceSrc,currentId);
		},
		initPopup:function(currentObj){
			var self=this,
				sourceSrc=currentObj.attr("data-source"),
				currentId=currentObj.attr("data-id");
			this.showMaskAndPopup(sourceSrc,currentId);
		},
		getGroup:function(){
			var self=this;
			var groupList=this.bodyNode.find("*[data-group="+self.groupName+"]");
			//清空groupData数组数据
			self.groupData.length=0;
			groupList.each(function(){
				self.groupData.push({
					src:$(this).attr("data-source"),
					id:$(this).attr("data-id"),
					caption:$(this).attr("data-caption")
				});
			});
			//console.log(self.groupData);
		},
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
		}
	};
	window["Lightbox"]=Lightbox;
})(jQuery);
