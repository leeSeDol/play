window.onload=function(){
	var wait = 12;
	function time(o){
		if(wait == 0){
			o.removeAttribute("");
			o.className = "";
			o.value = "免费获取验证码";
		}else{
			if(wait<10){
				o.value = "重新发送(0"+wait+")";
				wait--;
				setTimeout(function(){
					time(o);
				},1000);
			}else{
				o.className = 'set';
				o.value = "重新发送(" + wait + ")";
				wait--;
				setTimeout(function(){
					time(o);
				},1000);
			}
		}

	}

	document.getElementById("btn").onclick=function(){
		time(this);
	};
};
