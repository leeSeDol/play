window.onload=function(){
	var obj = {
		el: document.getElementById("canvas"),
		width:document.documentElement.clientWidth || document.body.clientWidth,
		height:document.documentElement.clientHeight || document.body.clientHeight,
		colors:['rgba(255,255,255,0.5)','#dd4125','#f60','#333','#e4ff00','#00fff6',''],
		num:500,
		size:1
	};

	if(obj.el){
		var ctx = obj.el.getContext("2d");
		obj.el.width = obj.width;
		obj.el.height = obj.height;
		ctx.fillStyle='rgba(0,0,0,0.05)';
		ctx.lineCap = 'round';
		init();
	}
	function init(){
		var items = getItems();
		var timer = setInterval(function(){
			ctx.fillRect(0,0,obj.width,obj.height);
			for(var a=0;a<items.length;a++){
				items[a].angle += items[a].speed; 
				items[a].x = Math.sin(items[a].angle*Math.PI/180)*items[a].path.r+items[a].x0;
				items[a].y = items[a].path.r - Math.cos(items[a].angle*Math.PI/180)*items[a].path.r + items[a].y0;
				ctx.strokeStyle = items[a].color;
				ctx.beginPath();
				ctx.moveTo(items[a].x,items[a].y);
				ctx.lineTo(items[a].x+0.5,items[a].y+0.5);
				ctx.stroke();
			}
		},16);
	}
	function getItems(){
		var items=[];
		for(var a=0;a<obj.num;a++){
			var per = {};
			var path = {};
			path.x = 680;
			path.y = 300;
			path.r = Math.floor(Math.random()*100+50);
			per.x = path.x;
			per.y = path.y-path.r;
			per.x0 = per.x;
			per.y0 = per.y;
			per.color = obj.colors[Math.floor(Math.random()*obj.colors.length)];
			per.angle = Math.floor(Math.random()*360);
			per.speed = Math.floor(Math.random()*2+1)/2;
			per.path = path;
			items.push(per);
		}
		return items;
	}
};
