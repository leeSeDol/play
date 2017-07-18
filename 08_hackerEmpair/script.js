window.onload=function(){

	var can = document.getElementById("canvas");
	var ctx = can.getContext("2d");
	var w = can.width = window.screen.width;
	var h = can.height = window.screen.height;

	var words = Array(256).join('1').split('');
	var text = '';
	var x=0;

	function draw(){
		ctx.fillStyle='rgba(0,0,0,0.05)';
		ctx.fillRect(0,0,w,h);
		ctx.fillStyle=color();
		words.map(function(y,n){
			text = String.fromCharCode(65+Math.ceil(Math.random()*57));
			x=n*10
			ctx.fillText(text,x,y);
			words[n] = y > Math.ceil(800+Math.random()*586) ? 0:y+=10;
		})
	};
	setInterval(function(){
		draw();
	},30);
	function color(){
		var r = Math.ceil(Math.random()*256);
		var g = Math.ceil(Math.random()*256);
		var b = Math.ceil(Math.random()*256);

		return "rgb("+ r +","+ g +","+ b +")";
	}
};
