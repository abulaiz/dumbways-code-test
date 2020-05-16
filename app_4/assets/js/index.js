
const base_api_url = "app_4/process.php";

window.hideClasses = function(className){
	let e = document.getElementsByClassName(className);
	for(let i = 0 ; i < e.length; i++){
		e[i].style.display = 'none';
	}	
}

window.hideContainers = function(){
	hideClasses('containers');
}

window.setMenuState = function(state){
	hideClasses('menu-nav')
	if( state == "menu" ){
		document.querySelector("#btn-menu-mode").style.display = '';
	} else {
		document.querySelector("#btn-sub-menu-mode").style.display = '';
	}

}

var add_course = {
	el : "#add-course-container",
	getData : function(name){

	},
	submit : function(){
		alert('Belum beres :(');
	},
	setVisible : function(){
		hideContainers();
		document.querySelector(this.el).style.display = '';
		this.loadData();
	},	
	loadData : function(){

	}	
}

var course_list = {
	el : "#course-list-container",
	setVisible : function(){
		hideContainers();
		document.querySelector(this.el).style.display = '';
		this.loadData();
	},
	loadData : function(){

	}
}

window.onhashchange = function(){
	let state = window.location.hash;
	if(!state || state == ''){
		course_list.setVisible();
		setMenuState("menu");		
	} else if(state == "#addCourse") {
	    add_course.setVisible();
	    setMenuState("sub-menu");
	}
}

course_list.setVisible();
setMenuState("menu");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	 console.log(this.responseText);
	}
};
xhttp.open("GET", base_api_url, true);
xhttp.send();