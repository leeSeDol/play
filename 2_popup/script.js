window.onload=function(){
	function $(id){
		if(id.substr(0,1)=='.'){
			return document.getElementsByClassName(id.substr(1));
		}
		return document.getElementById(id);
	}
	var popup=document.createElement('div');
	popup.className=' popup ';
	popup.innerHTML='<span class="btn ok">确定</span>'+
		'<span class="btn cancel">取消</span>'+
		'<span class="close"></span>';
	popup.style.width=0;
	popup.style.height=0;
	popup.style.opacity=0;
	document.body.appendChild(popup);
	$(".login")[0].onclick=function(){
		if($("mask").style.opacity==0){
			$("mask").style.opacity=1;
		}else{
			$("mask").style.opacity=0;
		}

		popup.style.width=500+'px';
		popup.style.height=300+'px';
		popup.style.opacity=1;



	};
};
