window.onload=function(){
	var oBox = document.getElementById("box");

	var wWidth = document.documentElement.clientWidth||document.body.clientWidth;
	var wHeight = document.documentElement.clientHeight||document.body.clientHeight;

	var winWidth = wWidth - oBox.clientWidth;
	var winHeight = wHeight - oBox.clientHeight;

	window.onresize = function(){
		wWidth = document.documentElement.clientWidth||document.body.clientWidth;
		wHeight = document.documentElement.clientHeight||document.body.clientHeight;

		winWidth = wWidth - oBox.clientWidth;
		winHeight = wHeight - oBox.clientHeight;
	};
	var lSpeed = 9;
	var tSpeed = 3;

	move();
	function move(){
		var Left = oBox.offsetLeft;
		var Top = oBox.offsetTop;

		let moveLeft = Left + lSpeed;
		let moveTop = Top + tSpeed;

		if(moveLeft>=winWidth || moveLeft<=0){
			moveLeft = Math.min(moveLeft,winWidth);
			moveLeft = Math.max(0,moveLeft);
			lSpeed=-lSpeed;
		}

		if(moveTop>winHeight||moveTop<=0){
			moveTop = Math.min(moveTop,winHeight);
			moveTop = Math.max(0,moveTop);
			tSpeed = -tSpeed;
		}
		
		oBox.style.left = moveLeft+'px';
		oBox.style.top = moveTop+'px';
		window.requestAnimationFrame(move);
	}
};
