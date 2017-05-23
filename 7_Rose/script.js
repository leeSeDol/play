var c=document.getElementById('canvas'),
	$=c.getContext('2d'),
	w=c.width=window.innerWidth,		//设置Canvas宽度（全屏）
	h=c.height=window.innerHeight,		//设置Canvas高度（全屏）
	t=0,num=450,						//num=450绘制数量
	u=0, _u,							//线性渐变的颜色值
	s , a , b ,
	x , y , _x , _y ,
	_t=1/100;


var anim=function(){
	$.globalCompositeOperation = 'source-over';
	//$.fillStyle='hsla(0,0%,0%,.75)';
	$.clearRect(0,0,w,h);
	$.globalCompositeOperation = 'lighter';
	for(var i=0;i<2;i++){
		x=0 ; _u=( u / 4 )+i;
		$.beginPath();
		//循环绘制个数（num），正玄 Math.sin(弧度)，余弦 Math.cos(弧度)
		/*for(var j=0;j<num;j++){
			//x -= .72 * Math.sin(4);
			x += 0.6;
            y = x * Math.sin(i + 5.0 * t + x/25) / 2;
            _x = x * Math.cos(b) - y * Math.sin(b);
            _y = x * Math.sin(b) + y * Math.cos(b);
            b = (j * 3) * Math.PI /6.8;
            $.lineWidth = .18;                                   //线条宽度
            $.arc(w / 2 - _x, h / 2 -_y, .5, 0, 2 * Math.PI);
		}
		var g = $.createLinearGradient(w / 2 + _x , h / 2 + _y, 0 , w / 2 + _x, h / 2 + _y);
                g.addColorStop(0.0, 'hsla('+ u +',95%,30%,1)');
                g.addColorStop(0.5, 'hsla('+ _u +',85%,40%,1)');
                g.addColorStop(1, 'hsla(0,0%,5%,1)'); 
                $.strokeStyle = g;                                          //线条颜色为 g（线性渐变）
                $.stroke();*/
        for(var j=0;j<num;j++){
        	x-=0.6;
        	y=x *Math.sin(i + 5*t +x/20) / 2;
        	_x = x * Math.cos(b) - y * Math.sin(b);
            _y = x * Math.sin(b) + y * Math.cos(b);
            b = (j * 3) * Math.PI /6.8;
        	$.arc(w / 2 - _x, h / 2 -_y, .5, 0, 2 * Math.PI);
        }
        var g=$.createLinearGradient(w / 2 - _x, h / 2 -_y,0,w / 2 - _x, h / 2 -_y);
        	
	}
	t+=_t;
	u -= 0.2;
	window.requestAnimationFrame(anim);
};
/*var anim = function(){
            $.globalCompositeOperation = 'source-over';                     //默认，在目标图像上显示源图像
            $.fillStyle = 'hsla(0, 0%, 0%, .75)';                           //填充颜色
            $.fillRect(0, 0, w, h);                                         //绘制“已填色”的矩形
            $.globalCompositeOperation = 'lighter';                         //显示源图像 + 目标图像
            for (var i = 0; i < 2; i++) {
                x = 0; _u = (u / 4)+i;
                $.beginPath();
                //循环绘制个数（num），正玄 Math.sin(弧度)，余弦 Math.cos(弧度)
                for (var j = 0; j < num; j++) {
                    x -= .72 * Math.sin(4);
                    y = x * Math.sin(i + 5.0 * t + x / 20) / 2;
                    _x = x * Math.cos(b) - y * Math.sin(b);
                    _y = x * Math.sin(b) + y * Math.cos(b);
                    b = (j * 3) * Math.PI / 6.8;
                    $.lineWidth = .18;                                      //线条宽度
                    $.arc(w / 2 - _x, h / 2 -_y, .5, 0, 2 * Math.PI);       //画圆（半径0.5）
                }

                //设置线性渐变
                var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y,  0, w / 2 + _x, h / 2 + _y);
                g.addColorStop(0.0, 'hsla('+ u +',95%,30%,1)');
                g.addColorStop(0.5, 'hsla('+ _u +',85%,40%,1)');
                g.addColorStop(1, 'hsla(0,0%,5%,1)'); 
                $.strokeStyle = g;                                          //线条颜色为 g（线性渐变）
                $.stroke();
            }
            t += _t;                                                        //摆动速度会不断增加
            u -= .2;                                                        //改变颜色值
            window.requestAnimationFrame(anim);                             //绘制动画 anim
        };*/
anim();
window.addEventListener('resize',function(){
	c.width= w =window.innerWidth;
	c.height= h =window.innerHeight;
},false);
