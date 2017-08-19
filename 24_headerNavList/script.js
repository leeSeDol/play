window.onload=function(){
	var headerNavList = $('header-nav-list');
	console.log(headerNavList);
	window.onscroll = function(){
		scrollFunction();
	};

}
function $(cls){
	return document.getElementsByClassName(cls)[0];
}
function scrollFunction(){
	var headerNavList = $('header-nav-list');
	var headerNav = $('header-nav')
	var oTop = document.documentElement.scrollTop||document.body.scrollTop;

	if(oTop>=100){
		headerNav.style.position = 'fixed';
		headerNav.style.top = 0;
		headerNav.style.left = 0;
		headerNavList.style.position = 'relative';
		headerNavList.style.left = '75px';	
	}else{
		headerNav.style.position = 'static';
		headerNav.style.top = 0;
		headerNav.style.left = 0;
		headerNavList.style.position = 'relative';
		headerNavList.style.left = '0';
	}
}
