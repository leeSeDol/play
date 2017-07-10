window.onload = function(){
	var mainMenuP = document.getElementsByClassName("main-menu")[0].getElementsByTagName("p");
	console.log(mainMenuP);
	var menuListDiv = document.getElementsByClassName("menu-list")[0].getElementsByTagName("div");
	console.log(menuListDiv);

	for(var i=0;i<3;i++){
		mainMenuP[i+1].onmouseover = function(num){
			return function(){
				this.index = num;
				console.log(this.index);
				for(var j=0;j<3;j++){
					menuListDiv[j].style.display = 'none';
				}
				menuListDiv[num].style.display = 'block';
			};
		}(i);
	}

	for(var i=0;i<3;i++){
		mainMenuP[i+1].onmouseout = function(num){
			return function(){
				menuListDiv[num].style.display = 'none';
			};
		}(i);
	}
	
};
