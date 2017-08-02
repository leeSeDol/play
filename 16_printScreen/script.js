function typeEffect(element,speed){
	var text = element.text();
	element.html('');
	var i=0;
	var timer = setInterval(function(){
		if(i<text.length){
			$(element).append(text.charAt(i));
			i++;
		}else{
			clearInterval(timer);
		}
	},speed);
}
$(document).ready(function(){
	var speed = 25;
	var delay = 100;
	delay2 = $('p.p1').text().length * speed;
	typeEffect($('h1'),speed);
	setTimeout(function(){
		$('p.p1').css("display","inline-block");
		typeEffect($('p.p1'),speed);
	},delay);
	setTimeout(function(){
		$('p.p2').css("display","inline-block");
		typeEffect($('p.p2'),speed);
	},delay2);
});
