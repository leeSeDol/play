window.onload=function(){
	var canvas = document.getElementById( 'canvas' );
	ctx = canvas.getContext( '2d' );

	var w = canvas.width;
	var h = canvas.height;

	/*随机生成奖品*/
	var awards = ['美女一只','sorry，很遗憾','抓住一只单身狗','滚去敲代码'];
	/*随机生成奖品*/
	var award = awards[Math.floor(Math.random()*awards.length)];
	console.log(award);

	/*奖品信息绘制在canvas*/
	ctx.font = 'bold 32px sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'bottom';
	ctx.fillText(award,w/2,h/2);

	/*然后将奖品信息装换成canvas的背景图 1为最高质量*/
	var dataurl = canvas.toDataURL('image/1.png',2);
	canvas.style.background='url('+dataurl+')';
	ctx.clearRect(0,0,w,h);

	/*定义canvas蒙版*/
	ctx.fillStyle='#ddd';
	ctx.fillRect(0,0,w,h);

	var flag=false;

	canvas.addEventListener('mousedown',function(){
        flag=true;
        /*涂抹去蒙版*/
        ctx.globalCompositeOperation = 'destination-out';
    });

    canvas.addEventListener('mousemove',function(e){
        if(flag){
        	var x = e.clientX - canvas.offsetLeft;
        	var y = e.clientY - canvas.offsetTop;
        	ctx.beginPath();
        	ctx.fillRect(x,y,30,30);
        	ctx.fill();
        }
    });

    canvas.addEventListener('mouseup',function(e){
    	flag = false;
    	ctx.flobalCompositeOperation = 'source-over';
    });
}
