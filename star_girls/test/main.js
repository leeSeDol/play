var can;
var ctx;
var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];
var stars2 = [];
var deltaTime;
var lastTime;

var switchy;
var life = 1;

var num2 = 60;
window.onload=function(){
	init();
};
function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");
	w = can.width;
	h = can.height;
	girlPic.src="src/girl.jpg";
	starPic.src="src/star.png";

	document.addEventListener("mousemove",mousemove,false);

	for(var i=0;i<num;i++){
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
		//stars[i].draw();
	}
	for(var i=0;i<num2;i++){
		var obj = new starObj();
		stars2.push(obj);
		stars2[i].initStatic();
	}

	lastTime = Date.now();
	gameloop();
}
function gameloop(){
	setInterval(gameloop,16);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime=now;
	drawBackground();
	drawGirl();
	drawStars();
	drawStars2();
	aliveUpdate();
}
function drawBackground(){

	ctx.restore();	
	ctx.fillStyle="#393550";
	ctx.fillRect(0,0,w,h);

}
function drawGirl(){

	ctx.drawImage(girlPic,100,150,600,300);

}
function drawStars(){
	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
	}
}
function drawStars2(){
	ctx.save();
	for(var i=0;i<num2;i++){
		stars2[i].static();
		stars2[i].draw();
	}
}
function mousemove(e){
	if(e.layerX||e.offsetX){
		var px = e.offsetX==undefined ? e.layerX:e.offsetX;
		var py = e.offsetY==undefined ? e.layerY:e.offsetY;
		if(px>100&&px<700&&py>150&&py<450){
			switchy = true;
		}else{
			switchy = false;
		}
	}
}
function aliveUpdate(){
	if(switchy==true){
		life += 0.03*deltaTime*0.08;
		if(life>=1){
			life = 1;
		}
	}else{
		life -= 0.03*deltaTime*0.08;
		if(life<=0){
			life = 0;
		}
	}
}
