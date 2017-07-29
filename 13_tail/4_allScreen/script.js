window.onload=function(){
	var obj = {
		el:document.getElementById("can"),
		width:document.documentElement.clientWidth||document.body.clientWidth,
		height:document.documentElement.clientHeight||document.body.clientHeight,
		colors: ['rgba(255,255,255,0.5)','#dd4215','#f60','#333','#e4ff00','#00fff6','#00ff4e','#96b1ff'],
		size:1,
		num:500
	};
	if(obj.el){
		var ctx = obj.el.getContext("2d");
		obj.el.width = obj.width;
		obj.el.height = obj.height;
		ctx.fillStyle = 'rgba(0,0,0,0.05)';
		ctx.lineCap='round';
		init();	
	}
	function init(){
		var items = getItems();
		console.log(items[12]);
		var timer = setInterval(function(){
			ctx.fillRect(0,0,obj.width,obj.height);
			for(var a=0;a<items.length;a++){
				items[a].angle += items[a].speed;
				items[a].x = Math.sin(items[a].angle*Math.PI/180) * items[a].path.r + items[a].x0;
				items[a].y = items[a].path.r - Math.cos(items[a].angle*Math.PI/180) * items[a].path.r+items[a].y0;
				ctx.lineWidth=1;
				ctx.beginPath();
				ctx.strokeStyle=items[a].color;
				ctx.moveTo(items[a].x,items[a].y);
				ctx.lineTo(items[a].x+0.5,items[a].y+0.5);
				ctx.stroke();
			}
		},16);
	}
	function getItems(){
		var items=[];
		for(var a=0;a<obj.num;a++){
			var per={};
			var path={};
		
			path.r = randomNum(50,150);
			path.x = randomNum(path.r,obj.width-path.r);
			path.y = randomNum(path.r,obj.height-path.r);

			per.x = path.x;
			per.y = path.y-path.r;
			per.x0 = per.x;
			per.y0 = per.y;
			per.angle = Math.ceil(Math.random()*360);
			per.speed = randomNum(1,2);
			per.color = obj.colors[Math.floor(Math.random()*8)];
			per.path=path;
			items.push(per);
		}
		return items;
	}
	function randomNum(a,b){
		return Math.floor(Math.random()*(b-a+1)+a);
	}
};
