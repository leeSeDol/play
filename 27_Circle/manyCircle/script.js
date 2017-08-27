window.onload=function(){
	init(10);
	function init(num){
		for(var i=0;i<num;i++){
			var oDiv = document.createElement("div");
			oDiv.className = 'box';
			oDiv.lSpeed = 3+i;
			oDiv.tSpeed = 1+i;
			oDiv.style.background = color();
			document.body.appendChild(oDiv);
		}
		var oBoxs = document.querySelectorAll('.box');
		var winWidth = document.documentElement.clientWidth - oBoxs[0].clientWidth;
		var winHeight = document.documentElement.clientHeight - oBoxs[0].clientHeight;
		window.onresize=function(){
			winWidth = document.documentElement.clientWidth - oBoxs[0].clientWidth;
			winHeight = document.documentElement.clientHeight - oBoxs[0].clientHeight;
			console.log(winWidth,winHeight);
		};
		move();
		function move(){
			for(var i=0;i<num;i++){
				var oBox = oBoxs[i];
				var left = oBox.offsetLeft;
				var top = oBox.offsetTop;
				var moveLeft = left+oBox.lSpeed;
				var moveTop = top+oBox.tSpeed;

				if(moveLeft>=winWidth||moveLeft<=0){
					moveLeft = Math.min(moveLeft,winWidth);
					moveLeft = Math.max(moveLeft,0);
					oBox.lSpeed = -oBox.lSpeed;
					oBox.style.background = color();
				}
				if(moveTop>=winHeight||moveTop<=0){
					moveTop = Math.min(moveTop,winHeight);
					moveTop = Math.max(moveTop,0);
					oBox.tSpeed = -oBox.tSpeed;
					oBox.style.background = color();
				}
				oBox.style.left = moveLeft + 'px';
				oBox.style.top = moveTop + 'px';
			}
			window.requestAnimationFrame(move);
		}

		function color(){
			var r = Math.floor(Math.random()*255);
			var g = Math.floor(Math.random()*255);	
			var b = Math.floor(Math.random()*255);	
			return "rgb("+ r +","+ g +","+ b +")";
		}
	}

};
