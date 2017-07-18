window.onload=function(){

	var can = document.getElementById("canvas");
	var ctx = can.getContext("2d");
	var w = can.width = window.screen.width;
	var h = can.height = window.screen.height;

	var words=Array(256).join('1').split('');

	function draw(){


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
}
