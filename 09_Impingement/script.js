window.onload=init;
function init(){
	var main = document.getElementById("main");
	var ball = document.getElementById("ball");
	var posX = 0;
	var posY = 0;
	var moveX = true;
	var moveY = true;
	time = null;
	function move(){
		if(moveX){
			posX++;
			ball.style.left = posX+'px';
			if(posX == main.offsetWidth - ball.clientWidth){
				moveX = false;
			}
		}else{
			posX--;
			ball.style.left = posX+'px';
			if(posX == 0){
				moveX = true;
			}
		}
		if(moveY){
			posY++;
			ball.style.top = posY+'px';
			if(posY == main.offsetHeight - ball.offsetHeight){
				moveY = false;
			}
		}else{
			posY--;
			ball.style.top = posY+'px';
			if(posY == 0){
				moveY = true;
			}
		}
	}
	time = setInterval(move,10);
}
